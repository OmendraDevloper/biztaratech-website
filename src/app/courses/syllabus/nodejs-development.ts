import { CourseSyllabus } from "@/types/syllabus";

export const nodejsdevelopmentSyllabus: CourseSyllabus = {
    overview: "Master Node.js and become a proficient backend developer. Learn to build scalable, high-performance applications using Node.js and its ecosystem.",
    prerequisites: [
        "Basic JavaScript knowledge",
        "Understanding of web development concepts",
        "Familiarity with HTML and CSS"
    ],
    learningOutcomes: [
        "Build robust backend applications with Node.js",
        "Develop RESTful and GraphQL APIs",
        "Implement authentication and authorization",
        "Work with databases and ORMs",
        "Deploy and scale Node.js applications"
    ],
    duration: "8 weeks",
    modules: [
        {
            module: "Module 1: Node.js Fundamentals",
            description: "Get started with Node.js and understand its core concepts.",
            topics: [
                "Introduction to Node.js",
                "Node.js Architecture",
                "Event Loop and Asynchronous Programming",
                "Modules and Package Management",
                "Built-in Modules (fs, path, http)"
            ],
            exercises: [
                "Create your first Node.js application",
                "Work with file system operations",
                "Build a basic HTTP server"
            ]
        },
        {
            module: "Module 2: Express.js Framework",
            description: "Learn to build web applications using Express.js.",
            topics: [
                "Express.js Basics",
                "Routing and Middleware",
                "Template Engines",
                "Error Handling",
                "Static Files and Security"
            ],
            exercises: [
                "Create a RESTful API",
                "Implement middleware functions",
                "Handle form submissions and file uploads"
            ]
        },
        {
            module: "Module 3: Database Integration",
            description: "Work with different databases in Node.js applications.",
            topics: [
                "MongoDB with Mongoose",
                "SQL Databases with Sequelize",
                "Database Design Patterns",
                "Data Validation",
                "Query Optimization"
            ],
            exercises: [
                "Build a CRUD application",
                "Implement data relationships",
                "Optimize database queries"
            ]
        },
        {
            module: "Module 4: Authentication and Security",
            description: "Implement secure user authentication and authorization.",
            topics: [
                "User Authentication Strategies",
                "JWT Implementation",
                "OAuth and Social Login",
                "Password Hashing",
                "Security Best Practices"
            ],
            exercises: [
                "Implement JWT authentication",
                "Create OAuth login system",
                "Secure API endpoints"
            ]
        },
        {
            module: "Module 5: Real-time Applications",
            description: "Build real-time features using WebSockets and Socket.io.",
            topics: [
                "WebSocket Protocol",
                "Socket.io Library",
                "Real-time Event Handling",
                "Rooms and Namespaces",
                "Scaling Real-time Apps"
            ],
            exercises: [
                "Build a real-time chat application",
                "Implement live notifications",
                "Create a collaborative tool"
            ]
        },
        {
            module: "Module 6: Deployment and Scaling",
            description: "Learn to deploy and scale Node.js applications in production.",
            topics: [
                "Application Deployment",
                "Docker Containerization",
                "Load Balancing",
                "Monitoring and Logging",
                "CI/CD Pipeline Setup"
            ],
            exercises: [
                "Deploy to cloud platforms",
                "Set up Docker containers",
                "Implement monitoring solutions"
            ]
        }
    ],
    projects: [
        "Build a full-featured social media API",
        "Create a real-time collaboration platform",
        "Develop an e-commerce backend",
        "Implement a microservices architecture"
    ],
    certification: {
        available: true,
        details: "Upon completion, receive a certificate in Node.js Development"
    }
};
