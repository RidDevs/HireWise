const quizData = {
    "Python": [
      {
        id: "py1",
        type: "multiple-choice",
        question: "What is the correct way to define a function in Python?",
        options: [
          "def myFunction():",
          "function myFunction():",
          "def myFunction{}:",
          "function myFunction{}:"
        ],
        correctAnswer: 0
      },
      {
        id: "py2",
        type: "multiple-choice",
        question: "Which of the following is NOT a built-in data type in Python?",
        options: [
          "List",
          "Dictionary",
          "Array",
          "Tuple"
        ],
        correctAnswer: 2
      },
      {
        id: "py3",
        type: "short-answer",
        question: "Write a Python function that checks if a number is prime.",
        correctAnswer: "A function that checks if a number is divisible by any integer from 2 to sqrt(n). Returning True if it's prime, False otherwise."
      },
      {
        id: "py4",
        type: "multiple-choice",
        question: "What does the 'self' parameter represent in a Python class method?",
        options: [
          "It refers to the class itself",
          "It refers to the instance of the class",
          "It refers to the parent class",
          "It is a reserved keyword but has no meaning"
        ],
        correctAnswer: 1
      },
      {
        id: "py5",
        type: "multiple-choice",
        question: "Which of the following is used for handling exceptions in Python?",
        options: [
          "try-catch",
          "try-except",
          "if-else",
          "for-in"
        ],
        correctAnswer: 1
      },
      {
        id: "py6",
        type: "short-answer",
        question: "Explain the difference between '==' and 'is' operators in Python.",
        correctAnswer: "'==' compares the values of objects (equality), while 'is' checks if two variables point to the same object in memory (identity)."
      },
      {
        id: "py7",
        type: "multiple-choice",
        question: "What does the following code do? [x for x in range(10) if x % 2 == 0]",
        options: [
          "Creates a list of all odd numbers from 0 to 9",
          "Creates a list of all even numbers from 0 to 9",
          "Creates a list of all numbers from 0 to 9",
          "Returns a generator of even numbers"
        ],
        correctAnswer: 1
      }
    ],
    "JavaScript": [
      {
        id: "js1",
        type: "multiple-choice",
        question: "Which keyword is used to define a variable that cannot be reassigned?",
        options: [
          "var",
          "let",
          "const",
          "static"
        ],
        correctAnswer: 2
      },
      {
        id: "js2",
        type: "multiple-choice",
        question: "What does the '===' operator do in JavaScript?",
        options: [
          "Assigns a value to a variable",
          "Compares values and types for equality",
          "Compares values for equality, ignoring types",
          "Creates a new variable"
        ],
        correctAnswer: 1
      },
      {
        id: "js3",
        type: "short-answer",
        question: "Explain the concept of closures in JavaScript.",
        correctAnswer: "A closure is a function that has access to its own scope, the outer function's variables, and global variables, even after the outer function has returned."
      },
      {
        id: "js4",
        type: "multiple-choice",
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
          "It refers to the previous object",
          "It refers to the current execution context",
          "It's a reserved word but has no specific purpose",
          "It refers to the parent object"
        ],
        correctAnswer: 1
      },
      {
        id: "js5",
        type: "multiple-choice",
        question: "Which method is used to add an element to the end of an array?",
        options: [
          "push()",
          "append()",
          "add()",
          "insert()"
        ],
        correctAnswer: 0
      },
      {
        id: "js6",
        type: "short-answer",
        question: "What is event bubbling in JavaScript?",
        correctAnswer: "Event bubbling is a mechanism where an event triggered on a nested element 'bubbles up' through its parent elements in the DOM tree, allowing parent elements to also handle the event."
      },
      {
        id: "js7",
        type: "multiple-choice",
        question: "What does the JSON.parse() function do?",
        options: [
          "Converts a JavaScript object to a JSON string",
          "Converts a JSON string to a JavaScript object",
          "Validates if a string is valid JSON",
          "Formats a JSON string for readability"
        ],
        correctAnswer: 1
      }
    ],
    "React": [
      {
        id: "react1",
        type: "multiple-choice",
        question: "What is JSX in React?",
        options: [
          "A JavaScript XML syntax that allows HTML in React",
          "A special database format for React",
          "JavaScript Extension library",
          "A styling framework for React"
        ],
        correctAnswer: 0
      },
      {
        id: "react2",
        type: "multiple-choice",
        question: "What hook is used to add state to a functional component?",
        options: [
          "useComponent",
          "useEffect",
          "useState",
          "useRef"
        ],
        correctAnswer: 2
      },
      {
        id: "react3",
        type: "short-answer",
        question: "Explain the difference between state and props in React.",
        correctAnswer: "Props are passed to a component from its parent and are read-only. State is managed within the component and can be changed by the component itself."
      },
      {
        id: "react4",
        type: "multiple-choice",
        question: "What is the correct lifecycle method to make API calls in class components?",
        options: [
          "componentWillMount",
          "componentDidMount",
          "componentWillUpdate",
          "render"
        ],
        correctAnswer: 1
      },
      {
        id: "react5",
        type: "multiple-choice",
        question: "What is the purpose of the key prop when rendering lists in React?",
        options: [
          "It sets the item as read-only",
          "It styles the list items differently",
          "It helps React identify which items have changed, been added, or removed",
          "It defines the order of rendering"
        ],
        correctAnswer: 2
      },
      {
        id: "react6",
        type: "short-answer",
        question: "Explain what a 'higher-order component' (HOC) is in React.",
        correctAnswer: "A higher-order component is a function that takes a component and returns a new component with additional props or behavior, enabling code reuse and logic sharing between components."
      },
      {
        id: "react7",
        type: "multiple-choice",
        question: "How can you prevent a component from re-rendering in React?",
        options: [
          "Using shouldComponentUpdate or React.memo",
          "Using the static keyword",
          "Using componentWillNeverRender",
          "Setting state to null"
        ],
        correctAnswer: 0
      }
    ],
    "Node.js": [
      {
        id: "node1",
        type: "multiple-choice",
        question: "What is Node.js?",
        options: [
          "A frontend framework",
          "A JavaScript runtime environment",
          "A database system",
          "A programming language"
        ],
        correctAnswer: 1
      },
      {
        id: "node2",
        type: "multiple-choice",
        question: "Which of the following is NOT a core module in Node.js?",
        options: [
          "fs",
          "http",
          "path",
          "express"
        ],
        correctAnswer: 3
      },
      {
        id: "node3",
        type: "short-answer",
        question: "Explain the event loop in Node.js.",
        correctAnswer: "The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible and executing callbacks when operations complete."
      },
      {
        id: "node4",
        type: "multiple-choice",
        question: "What command is used to initialize a new Node.js project?",
        options: [
          "node start",
          "npm start",
          "npm init",
          "node init"
        ],
        correctAnswer: 2
      },
      {
        id: "node5",
        type: "multiple-choice",
        question: "How can you make a Node.js application listen on port 3000?",
        options: [
          "app.listen(3000)",
          "server.port = 3000",
          "port.listen(3000)",
          "listen(3000)"
        ],
        correctAnswer: 0
      },
      {
        id: "node6",
        type: "short-answer",
        question: "What is middleware in the context of Express.js?",
        correctAnswer: "Middleware functions are functions that have access to the request and response objects, and the next middleware function in the application's request-response cycle. They can execute code, modify request and response objects, end the request-response cycle, or call the next middleware function."
      },
      {
        id: "node7",
        type: "multiple-choice",
        question: "What is the purpose of the package.json file in a Node.js project?",
        options: [
          "It contains the actual code of the application",
          "It is used to define CSS styles",
          "It contains project metadata and dependencies",
          "It is used to configure the database"
        ],
        correctAnswer: 2
      }
    ],
    "Machine Learning": [
      {
        id: "ml1",
        type: "multiple-choice",
        question: "Which of the following is NOT a type of machine learning?",
        options: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Reinforcement Learning",
          "Deterministic Learning"
        ],
        correctAnswer: 3
      },
      {
        id: "ml2",
        type: "multiple-choice",
        question: "What is the purpose of the training set in machine learning?",
        options: [
          "To test the model's performance",
          "To validate the model's hyperparameters",
          "To teach the model patterns and relationships",
          "To deploy the model to production"
        ],
        correctAnswer: 2
      },
      {
        id: "ml3",
        type: "short-answer",
        question: "Explain the difference between classification and regression in machine learning.",
        correctAnswer: "Classification predicts discrete class labels or categories, while regression predicts continuous numeric values or quantities."
      },
      {
        id: "ml4",
        type: "multiple-choice",
        question: "What does 'overfitting' mean in machine learning?",
        options: [
          "The model performs poorly on both training and test data",
          "The model performs well on training data but poorly on test data",
          "The model performs equally well on both training and test data",
          "The model requires too much computational resources"
        ],
        correctAnswer: 1
      },
      {
        id: "ml5",
        type: "multiple-choice",
        question: "Which algorithm is commonly used for recommendation systems?",
        options: [
          "Linear Regression",
          "K-means Clustering",
          "Collaborative Filtering",
          "Decision Trees"
        ],
        correctAnswer: 2
      },
      {
        id: "ml6",
        type: "short-answer",
        question: "What is the 'curse of dimensionality' in machine learning?",
        correctAnswer: "The curse of dimensionality refers to various problems that arise when analyzing data in high-dimensional spaces, such as sparsity of data, increased computational complexity, and difficulty in visualization, which often lead to reduced performance of machine learning algorithms."
      },
      {
        id: "ml7",
        type: "multiple-choice",
        question: "Which of the following is a common evaluation metric for classification problems?",
        options: [
          "Mean Squared Error (MSE)",
          "R-squared",
          "Accuracy and F1 Score",
          "Euclidean Distance"
        ],
        correctAnswer: 2
      }
    ],
    "Data Science": [
      {
        id: "ds1",
        type: "multiple-choice",
        question: "Which of these is NOT typically a phase in the data science lifecycle?",
        options: [
          "Data Collection",
          "Data Cleaning",
          "Data Monetization",
          "Data Visualization"
        ],
        correctAnswer: 2
      },
      {
        id: "ds2",
        type: "multiple-choice",
        question: "What is 'feature engineering' in data science?",
        options: [
          "Designing the UI features of a data application",
          "Creating new variables from existing data",
          "Engineering hardware to process data faster",
          "Fixing bugs in data processing code"
        ],
        correctAnswer: 1
      },
      {
        id: "ds3",
        type: "short-answer",
        question: "Explain the concept of 'p-value' in statistical hypothesis testing.",
        correctAnswer: "The p-value is the probability of obtaining test results at least as extreme as the observed results during the test, assuming that the null hypothesis is correct. A low p-value suggests that the observed data is unlikely under the null hypothesis, leading to its rejection."
      },
      {
        id: "ds4",
        type: "multiple-choice",
        question: "Which plot is best suited for showing the distribution of a continuous variable?",
        options: [
          "Scatter plot",
          "Bar chart",
          "Histogram",
          "Pie chart"
        ],
        correctAnswer: 2
      },
      {
        id: "ds5",
        type: "multiple-choice",
        question: "What does PCA (Principal Component Analysis) primarily help with?",
        options: [
          "Database optimization",
          "Dimensionality reduction",
          "Data collection",
          "API development"
        ],
        correctAnswer: 1
      },
      {
        id: "ds6",
        type: "short-answer",
        question: "What is the difference between correlation and causation?",
        correctAnswer: "Correlation means that two variables show a statistical relationship or pattern, moving together, but doesn't imply that one causes the other. Causation means that one event (the cause) directly results in another event (the effect)."
      },
      {
        id: "ds7",
        type: "multiple-choice",
        question: "Which Python library is primarily used for data manipulation and analysis?",
        options: [
          "NumPy",
          "Matplotlib",
          "Pandas",
          "SciPy"
        ],
        correctAnswer: 2
      }
    ],
    "SQL": [
      {
        id: "sql1",
        type: "multiple-choice",
        question: "What does SQL stand for?",
        options: [
          "Structured Query Language",
          "Standard Query Language",
          "Simple Query Language",
          "System Query Language"
        ],
        correctAnswer: 0
      },
      {
        id: "sql2",
        type: "multiple-choice",
        question: "Which SQL command is used to retrieve data from a database?",
        options: [
          "GET",
          "SELECT",
          "FETCH",
          "RETRIEVE"
        ],
        correctAnswer: 1
      },
      {
        id: "sql3",
        type: "short-answer",
        question: "Write an SQL query to select all employees whose salary is greater than $50,000 from a table named 'employees'.",
        correctAnswer: "SELECT * FROM employees WHERE salary > 50000;"
      },
      {
        id: "sql4",
        type: "multiple-choice",
        question: "What is the purpose of the GROUP BY clause in SQL?",
        options: [
          "To sort the result set",
          "To filter rows before grouping",
          "To group rows that have the same values",
          "To join multiple tables"
        ],
        correctAnswer: 2
      },
      {
        id: "sql5",
        type: "multiple-choice",
        question: "Which SQL constraint ensures that a column cannot have NULL values?",
        options: [
          "UNIQUE",
          "NOT NULL",
          "DEFAULT",
          "CHECK"
        ],
        correctAnswer: 1
      },
      {
        id: "sql6",
        type: "short-answer",
        question: "Explain the difference between INNER JOIN and LEFT JOIN in SQL.",
        correctAnswer: "An INNER JOIN returns only the matching rows from both tables. A LEFT JOIN returns all rows from the left table and matching rows from the right table (with NULL values for non-matches)."
      },
      {
        id: "sql7",
        type: "multiple-choice",
        question: "Which of the following is NOT a valid SQL aggregate function?",
        options: [
          "COUNT()",
          "AVG()",
          "SUM()",
          "COLLECT()"
        ],
        correctAnswer: 3
      }
    ],
    "Java": [
      {
        id: "java1",
        type: "multiple-choice",
        question: "What is the main characteristic of Java?",
        options: [
          "It is a procedural language",
          "It is platform-dependent",
          "It is an object-oriented language",
          "It is a functional language"
        ],
        correctAnswer: 2
      },
      {
        id: "java2",
        type: "multiple-choice",
        question: "Which component is responsible for executing Java bytecode?",
        options: [
          "JDK",
          "JRE",
          "JVM",
          "JSP"
        ],
        correctAnswer: 2
      },
      {
        id: "java3",
        type: "short-answer",
        question: "Explain the difference between method overloading and method overriding in Java.",
        correctAnswer: "Method overloading is defining multiple methods with the same name but different parameters in the same class. Method overriding is implementing a method in a subclass that is already defined in the superclass with the same signature."
      },
      {
        id: "java4",
        type: "multiple-choice",
        question: "What is the parent class of all classes in Java?",
        options: [
          "Main",
          "Object",
          "Super",
          "Parent"
        ],
        correctAnswer: 1
      },
      {
        id: "java5",
        type: "multiple-choice",
        question: "Which keyword is used to prevent a method from being overridden?",
        options: [
          "static",
          "abstract",
          "final",
          "private"
        ],
        correctAnswer: 2
      },
      {
        id: "java6",
        type: "short-answer",
        question: "What are Java exceptions and how are they handled?",
        correctAnswer: "Exceptions are events that disrupt the normal flow of program execution. In Java, exceptions are handled using try, catch, finally, throw, and throws keywords. Try blocks contain code that might throw an exception, catch blocks handle specific exceptions, and finally blocks contain code that always executes."
      },
      {
        id: "java7",
        type: "multiple-choice",
        question: "Which of the following is NOT a primitive data type in Java?",
        options: [
          "int",
          "boolean",
          "String",
          "char"
        ],
        correctAnswer: 2
      }
    ],
    "C++": [
      {
        id: "cpp1",
        type: "multiple-choice",
        question: "What is a key feature of C++?",
        options: [
          "Garbage collection",
          "Platform independence",
          "Object-oriented programming",
          "Interpreted execution"
        ],
        correctAnswer: 2
      },
      {
        id: "cpp2",
        type: "multiple-choice",
        question: "Which operator is used for memory allocation in C++?",
        options: [
          "alloc",
          "malloc",
          "new",
          "create"
        ],
        correctAnswer: 2
      },
      {
        id: "cpp3",
        type: "short-answer",
        question: "Explain the concept of function overloading in C++.",
        correctAnswer: "Function overloading allows creating multiple functions with the same name but different parameters (number, type, or order). The compiler determines which function to call based on the arguments provided."
      },
      {
        id: "cpp4",
        type: "multiple-choice",
        question: "What is the purpose of the 'const' keyword in C++?",
        options: [
          "To declare a variable that can't be modified",
          "To create a constant loop",
          "To indicate a function that doesn't return anything",
          "To prevent class inheritance"
        ],
        correctAnswer: 0
      },
      {
        id: "cpp5",
        type: "multiple-choice",
        question: "Which is NOT a type of inheritance supported by C++?",
        options: [
          "Single inheritance",
          "Multiple inheritance",
          "Multilevel inheritance",
          "Circular inheritance"
        ],
        correctAnswer: 3
      },
      {
        id: "cpp6",
        type: "short-answer",
        question: "What is the difference between stack and heap memory in C++?",
        correctAnswer: "Stack memory is used for static memory allocation and is managed automatically. Heap memory is used for dynamic memory allocation, requires manual management with new/delete operators, and persists until explicitly deallocated."
      },
      {
        id: "cpp7",
        type: "multiple-choice",
        question: "What does the '::' operator do in C++?",
        options: [
          "Multiplication",
          "Pointer dereferencing",
          "Scope resolution",
          "Inheritance"
        ],
        correctAnswer: 2
      }
    ],
    "Docker": [
      {
        id: "docker1",
        type: "multiple-choice",
        question: "What is Docker?",
        options: [
          "A programming language",
          "A containerization platform",
          "A database technology",
          "A cloud provider"
        ],
        correctAnswer: 1
      },
      {
        id: "docker2",
        type: "multiple-choice",
        question: "What file is used to define a Docker container?",
        options: [
          "Dockerfile",
          "Containerfile",
          "DockerConfig",
          "docker.json"
        ],
        correctAnswer: 0
      },
      {
        id: "docker3",
        type: "short-answer",
        question: "Explain the difference between a Docker image and a Docker container.",
        correctAnswer: "A Docker image is a read-only template that contains a set of instructions for creating a container. A container is a runnable instance of an image, which can be started, stopped, moved, or deleted."
      },
      {
        id: "docker4",
        type: "multiple-choice",
        question: "Which command is used to list all running Docker containers?",
        options: [
          "docker list",
          "docker ps",
          "docker containers",
          "docker show"
        ],
        correctAnswer: 1
      },
      {
        id: "docker5",
        type: "multiple-choice",
        question: "What is Docker Compose used for?",
        options: [
          "Writing Docker documentation",
          "Building Docker images",
          "Defining and running multi-container Docker applications",
          "Deploying Docker to cloud providers"
        ],
        correctAnswer: 2
      },
      {
        id: "docker6",
        type: "short-answer",
        question: "What are Docker volumes and why are they used?",
        correctAnswer: "Docker volumes are a mechanism for persisting data generated by and used by Docker containers. They are used to store data outside the container's filesystem, making data persistent even when containers are removed."
      },
      {
        id: "docker7",
        type: "multiple-choice",
        question: "Which of the following is NOT a benefit of using Docker?",
        options: [
          "Consistency across different environments",
          "Isolation of applications",
          "Resource efficiency",
          "Automatic bug fixing in code"
        ],
        correctAnswer: 3
      }
    ],
    "HTML": [
      {
        id: "html1",
        type: "multiple-choice",
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Markup Language",
          "Hyper Transfer Markup Language",
          "Hyperlink Text Marking Language"
        ],
        correctAnswer: 0
      },
      {
        id: "html2",
        type: "multiple-choice",
        question: "Which HTML tag is used to define an internal style sheet?",
        options: [
          "<css>",
          "<script>",
          "<style>",
          "<link>"
        ],
        correctAnswer: 2
      },
      {
        id: "html3",
        type: "short-answer",
        question: "Explain the purpose of the HTML5 semantic elements.",
        correctAnswer: "HTML5 semantic elements provide meaning to the webpage structure, making it more accessible and SEO-friendly. Examples include <header>, <footer>, <article>, <section>, <nav>, which clearly define different parts of a webpage."
      },
      {
        id: "html4",
        type: "multiple-choice",
        question: "Which HTML element is used to specify a header for a document or section?",
        options: [
          "<head>",
          "<header>",
          "<top>",
          "<heading>"
        ],
        correctAnswer: 1
      },
      {
        id: "html5",
        type: "multiple-choice",
        question: "Which attribute is used to provide an alternate text for an image?",
        options: [
          "title",
          "desc",
          "alt",
          "src"
        ],
        correctAnswer: 2
      },
      {
        id: "html6",
        type: "short-answer",
        question: "What is the difference between <div> and <span> elements?",
        correctAnswer: "<div> is a block-level element that typically contains other elements and creates a new line, while <span> is an inline element used for styling parts of text within a line without creating new lines."
      },
      {
        id: "html7",
        type: "multiple-choice",
        question: "Which HTML5 element is used to play video files?",
        options: [
          "<media>",
          "<video>",
          "<movie>",
          "<play>"
        ],
        correctAnswer: 1
      }
    ],
    "CSS": [
      {
        id: "css1",
        type: "multiple-choice",
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style Sheets",
          "Colorful Style Sheets"
        ],
        correctAnswer: 0
      },
      {
        id: "css2",
        type: "multiple-choice",
        question: "Which property is used to change the background color?",
        options: [
          "color",
          "bgcolor",
          "background-color",
          "background"
        ],
        correctAnswer: 2
      },
      {
        id: "css3",
        type: "short-answer",
        question: "Explain the CSS Box Model.",
        correctAnswer: "The CSS Box Model describes the rectangular boxes generated for elements in the document tree. It consists of content, padding, border, and margin areas, which together determine the space an element occupies on a page."
      },
      {
        id: "css4",
        type: "multiple-choice",
        question: "Which CSS property is used to control the text size?",
        options: [
          "text-size",
          "font-size",
          "text-style",
          "font-style"
        ],
        correctAnswer: 1
      },
      {
        id: "css5",
        type: "multiple-choice",
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        options: [
          "p {text-size: bold;}",
          "p {font-weight: bold;}",
          "<p style='font-size: bold;'>",
          "p.all {font-weight: bold;}"
        ],
        correctAnswer: 1
      },
      {
        id: "css6",
        type: "short-answer",
        question: "What is the difference between 'display: none' and 'visibility: hidden' in CSS?",
        correctAnswer: "'display: none' removes the element from the document flow, making it invisible and taking up no space. 'visibility: hidden' makes the element invisible but maintains its space in the layout."
      },
      {
        id: "css7",
        type: "multiple-choice",
        question: "Which CSS property is used to add space between the content and the border of an element?",
        options: [
          "margin",
          "spacing",
          "padding",
          "border-spacing"
        ],
        correctAnswer: 2
      }
    ],
    "MongoDB": [
      {
        id: "mongo1",
        type: "multiple-choice",
        question: "What type of database is MongoDB?",
        options: [
          "Relational database",
          "NoSQL document database",
          "Graph database",
          "In-memory database"
        ],
        correctAnswer: 1
      },
      {
        id: "mongo2",
        type: "multiple-choice",
        question: "In MongoDB, what is the equivalent of a table in relational databases?",
        options: [
          "Document",
          "Collection",
          "Field",
          "Index"
        ],
        correctAnswer: 1
      },
      {
        id: "mongo3",
        type: "short-answer",
        question: "Explain the concept of 'sharding' in MongoDB.",
        correctAnswer: "Sharding is a method for distributing data across multiple machines. It's MongoDB's approach to horizontal scaling, allowing databases to handle more data and traffic by splitting data across multiple servers or shards."
      },
      {
        id: "mongo4",
        type: "multiple-choice",
        question: "What is the MongoDB query language called?",
        options: [
          "MQL",
          "MDBQL",
          "NoSQL",
          "MongoDB doesn't use a query language"
        ],
        correctAnswer: 0
      },
      {
        id: "mongo5",
        type: "multiple-choice",
        question: "Which field is automatically added to every document in MongoDB?",
        options: [
          "_id",
          "id",
          "document_id",
          "mongo_id"
        ],
        correctAnswer: 0
      },
      {
        id: "mongo6",
        type: "short-answer",
        question: "What are the advantages of using MongoDB over traditional relational databases?",
        correctAnswer: "MongoDB offers flexible schema design (no rigid structure), horizontal scalability, high performance for read/write operations, ability to store complex hierarchical data as single documents, and built-in support for replication and high availability."
      },
      {
        id: "mongo7",
        type: "multiple-choice",
        question: "Which of the following data types is NOT supported in MongoDB?",
        options: [
          "Array",
          "Date",
          "Binary data",
          "Stored procedure"
        ],
        correctAnswer: 3
      }
    ],
    "TensorFlow": [
      {
        id: "tf1",
        type: "multiple-choice",
        question: "What is TensorFlow primarily used for?",
        options: [
          "Web development",
          "Database management",
          "Machine learning and deep learning",
          "Game development"
        ],
        correctAnswer: 2
      },
      {
        id: "tf2",
        type: "multiple-choice",
        question: "What is a 'tensor' in TensorFlow?",
        options: [
          "A type of neural network",
          "A multi-dimensional array of data",
          "A model evaluation metric",
          "A specialized GPU"
        ],
        correctAnswer: 1
      },
      {
        id: "tf3",
        type: "short-answer",
        question: "Explain the difference between TensorFlow's eager execution and graph execution modes.",
        correctAnswer: "In eager execution, operations are evaluated immediately as they are called, making development and debugging more intuitive. In graph execution, operations are defined in a computational graph first, then executed in sessions, offering better performance and deployment options."
      },
      {
        id: "tf4",
        type: "multiple-choice",
        question: "Which of the following is a high-level API built on top of TensorFlow?",
        options: [
          "NumPy",
          "PyTorch",
          "Keras",
          "SciKit-Learn"
        ],
        correctAnswer: 2
      },
      {
        id: "tf5",
        type: "multiple-choice",
        question: "Which deployment platform is NOT directly supported by TensorFlow?",
        options: [
          "Mobile devices",
          "Web browsers",
          "Microsoft Word",
          "Embedded systems"
        ],
        correctAnswer: 2
      },
      {
        id: "tf6",
        type: "short-answer",
        question: "What is TensorFlow Lite and what problem does it solve?",
        correctAnswer: "TensorFlow Lite is a lightweight version of TensorFlow designed for mobile and embedded devices. It solves the problem of deploying machine learning models on resource-constrained devices by offering smaller binary size, optimized performance, and lower power consumption."
      },
      {
        id: "tf7",
        type: "multiple-choice",
        question: "Which company developed TensorFlow?",
        options: [
          "Microsoft",
          "Facebook",
          "Google",
          "Amazon"
        ],
        correctAnswer: 2
      }
    ],
    "Flask": [
      {
        id: "flask1",
        type: "multiple-choice",
        question: "What is Flask?",
        options: [
          "A JavaScript framework",
          "A Python web framework",
          "A database system",
          "A testing tool"
        ],
        correctAnswer: 1
      },
      {
        id: "flask2",
        type: "multiple-choice",
        question: "Which template engine is used by Flask by default?",
        options: [
          "Django Templates",
          "Handlebars",
          "Jinja2",
          "Mustache"
        ],
        correctAnswer: 2
      },
      {
        id: "flask3",
        type: "short-answer",
        question: "Explain what Flask Blueprints are and why they are useful.",
        correctAnswer: "Flask Blueprints are a way to organize a Flask application into smaller, reusable components. They help in structuring larger applications by splitting them into modular parts, each with its own routes, templates, static files, and error handlers."
      },
      {
        id: "flask4",
        type: "multiple-choice",
        question: "Which decorator is used to register a route in Flask?",
        options: [
          "@app.route()",
          "@app.url()",
          "@app.path()",
          "@app.register()"
        ],
        correctAnswer: 0
      },
      {
        id: "flask5",
        type: "multiple-choice",
        question: "What command is typically used to run a Flask application in development mode?",
        options: [
          "flask run",
          "python app.py",
          "Both A and B are correct",
          "flask server --dev"
        ],
        correctAnswer: 2
      },
      {
        id: "flask6",
        type: "short-answer",
        question: "What is Flask-SQLAlchemy and what does it provide?",
        correctAnswer: "Flask-SQLAlchemy is an extension for Flask that adds support for SQLAlchemy, an SQL toolkit and Object-Relational Mapping (ORM) system. It simplifies database usage in Flask applications by providing tools for defining models, performing queries, and managing database sessions."
      },
      {
        id: "flask7",
        type: "multiple-choice",
        question: "What is the purpose of the Flask request object?",
        options: [
          "To send HTTP responses",
          "To access incoming request data",
          "To define application routes",
          "To create database models"
        ],
        correctAnswer: 1
      }
    ],
    "Django": [
      {
        id: "django1",
        type: "multiple-choice",
        question: "What is Django?",
        options: [
          "A JavaScript library",
          "A Python web framework",
          "A database system",
          "A front-end design tool"
        ],
        correctAnswer: 1
      },
      {
        id: "django2",
        type: "multiple-choice",
        question: "What architectural pattern does Django follow?",
        options: [
          "Model-View-Controller (MVC)",
          "Model-Template-View (MTV)",
          "Component-Based Architecture",
          "Microservices Architecture"
        ],
        correctAnswer: 1
      },
      {
        id: "django3",
        type: "short-answer",
        question: "Explain what Django's ORM is and how it simplifies database operations.",
        correctAnswer: "Django's ORM (Object-Relational Mapping) allows developers to interact with databases using Python objects instead of raw SQL. It abstracts database operations, making them database-agnostic, provides a high-level API for queries, and handles migrations automatically."
      },
      {
        id: "django4",
        type: "multiple-choice",
        question: "Which command creates a new Django project?",
        options: [
          "django startproject",
          "django-admin startproject",
          "python manage.py createproject",
          "django create"
        ],
        correctAnswer: 1
      },
      {
        id: "django5",
        type: "multiple-choice",
        question: "What is the purpose of Django's middleware?",
        options: [
          "To process CSS and JavaScript files",
          "To serve static files",
          "To process requests and responses globally",
          "To configure database connections"
        ],
        correctAnswer: 2
      },
      {
        id: "django6",
        type: "short-answer",
        question: "What are Django forms and what advantages do they provide?",
        correctAnswer: "Django forms provide a mechanism to generate HTML forms, validate user-submitted data, and convert that data to Python types. They handle CSRF protection, field rendering, error messages, and data cleaning, making it easier to work with user input securely and efficiently."
      },
      {
        id: "django7",
        type: "multiple-choice",
        question: "Which of the following is NOT a built-in Django app?",
        options: [
          "django.contrib.admin",
          "django.contrib.auth",
          "django.contrib.sessions",
          "django.contrib.payments"
        ],
        correctAnswer: 3
      }
    ]
  };
  