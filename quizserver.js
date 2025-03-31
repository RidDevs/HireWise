const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/generate-quiz', async (req, res) => {
  try {
    const { skills, questionCount = 5 } = req.body;
    
    if (!skills || !Array.isArray(skills) || skills.length === 0) {
      return res.status(400).json({ error: 'Skills array is required' });
    }

    if (!rateLimitCheck()) {
      return res.status(429).json({ error: 'Rate limit exceeded. Try again later.' });
    }
    
    const questions = await generateQuizQuestions(skills, questionCount);
    
    return res.json({ questions });
  } catch (error) {
    console.error('Error generating quiz:', error);
    if (error.response && error.response.data) {
      return res.status(500).json({ 
        error: 'Failed to generate quiz questions', 
        details: error.response.data 
      });
    }
    return res.status(500).json({ error: 'Failed to generate quiz questions' });
  }
});

app.get('/api/test-gemini', async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent("Say hello and tell me what you can do.");
    
    res.json({ 
      success: true, 
      response: result.response.text() 
    });
  } catch (error) {
    console.error('Error testing Gemini API:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      details: error.response?.data || 'No additional details'
    });
  }
});

const apiCallsPerHour = {};

function rateLimitCheck() {
  const now = new Date();
  const hourKey = `${now.getDate()}-${now.getHours()}`;
  
  if (!apiCallsPerHour[hourKey]) {
    apiCallsPerHour[hourKey] = 0;
  }
  
  if (apiCallsPerHour[hourKey] >= 100) { 
    return false;
  }
  
  apiCallsPerHour[hourKey]++;
  return true;
}

async function generateQuizQuestions(skills, questionCount) {

  const questionsPerSkill = Math.ceil(questionCount / skills.length);
  const actualQuestionCount = Math.min(questionCount, skills.length * questionsPerSkill);
  
  const prompt = `Generate ${actualQuestionCount} quiz questions about the following technical skills: ${skills.join(', ')}.

For each skill, create ${questionsPerSkill} multiple-choice question(s) that would test knowledge of that skill.

Each question should have:
1. A clear question related to the skill
2. Four possible answer options (A, B, C, D)
3. The index of the correct answer (0 for A, 1 for B, 2 for C, 3 for D)
4. The name of the skill being tested

IMPORTANT: Your response must ONLY contain a valid JSON array of question objects and nothing else. Do not include any explanations, markdown formatting, or other text outside the JSON array.

Format each question object like this:
{
  "question": "What is X?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctAnswer": 0,
  "skill": "Skill Name"
}

Make sure the questions test practical knowledge and range from basic to intermediate difficulty.`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    try {
      const jsonMatch = responseText.match(/\[[\s\S]*\]/);
      
      if (jsonMatch) {
        const questions = JSON.parse(jsonMatch[0]);
        if (validateQuestions(questions, skills, actualQuestionCount)) {
          return questions;
        }
      } 
      
      const codeBlockMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (codeBlockMatch) {
        const questions = JSON.parse(codeBlockMatch[1].trim());
        if (validateQuestions(questions, skills, actualQuestionCount)) {
          return questions;
        }
      }
      
      console.warn("Couldn't extract valid JSON from Gemini's response, using backup questions");
      return generateBackupQuestions(skills, actualQuestionCount);
      
    } catch (error) {
      console.error("Error parsing Gemini's response:", error);
      return generateBackupQuestions(skills, actualQuestionCount);
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return generateBackupQuestions(skills, actualQuestionCount);
  }
}

function validateQuestions(questions, skills, expectedCount) {
  if (!Array.isArray(questions) || questions.length === 0) {
    return false;
  }
  
  for (const q of questions) {
    if (!q.question || !Array.isArray(q.options) || q.options.length !== 4 || 
        typeof q.correctAnswer !== 'number' || !q.skill) {
      return false;
    }
  }
  
  return true;
}

function generateBackupQuestions(skills, questionCount) {
  const backupQuestions = [];
  
  skills.forEach(skill => {
    backupQuestions.push({
      question: `Which of the following best describes ${skill}?`,
      options: [
        `A technology used for solving problems in its domain`,
        `A programming language created recently`,
        `A database management system`,
        `A design pattern in software engineering`
      ],
      correctAnswer: 0,
      skill: skill
    });
  });
  
  return backupQuestions.slice(0, questionCount);
}

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});


app.listen(PORT, () => {
  console.log(`Quiz generation API running on port ${PORT}`);
});