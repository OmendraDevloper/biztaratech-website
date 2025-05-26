import { CourseSyllabus } from "@/types/syllabus";

export const mernstackSyllabus: CourseSyllabus = {
    overview: "Master full-stack web development with the MERN (MongoDB, Express.js, React, Node.js) stack. Learn to build modern, scalable web applications from front to back end.",
    prerequisites: [
        "Basic HTML, CSS, and JavaScript knowledge",
        "Understanding of web development concepts",
        "Familiarity with Git version control"
    ],
    learningOutcomes: [
        "Build full-stack web applications using MERN",
        "Create responsive and dynamic user interfaces with React",
        "Develop RESTful APIs with Node.js and Express",
        "Work with MongoDB databases",
        "Deploy and maintain MERN applications"
    ],
    duration: "12 weeks",
    modules: [
        {
            module: "Module 1: Frontend Development with React",
            description: "Master modern frontend development using React and its ecosystem.",
            topics: [
                "React Fundamentals",
                "Components and Props",
                "State Management",
                "Hooks and Custom Hooks",
                "React Router",
                "Material UI/Tailwind CSS"
            ],
            exercises: [
                "Build interactive UI components",
                "Implement client-side routing",
                "Create custom hooks"
            ]
        },
        {
            module: "Module 2: Backend Development with Node.js",
            description: "Learn server-side development using Node.js and Express.",
            topics: [
                "Node.js Fundamentals",
                "Express.js Framework",
                "RESTful API Design",
                "Middleware Implementation",
                "Error Handling",
                "API Security"
            ],
            exercises: [
                "Create RESTful APIs",
                "Implement authentication",
                "Handle file uploads"
            ]
        },
        {
            module: "Module 3: MongoDB Database",
            description: "Master data management with MongoDB and Mongoose ODM.",
            topics: [
                "MongoDB Basics",
                "Schema Design",
                "CRUD Operations",
                "Mongoose ODM",
                "Aggregation Pipeline",
                "Indexing and Optimization"
            ],
            exercises: [
                "Design database schemas",
                "Implement data relationships",
                "Write complex queries"
            ]
        },
        {
            module: "Module 4: Full Stack Integration",
            description: "Connect frontend and backend to create complete applications.",
            topics: [
                "API Integration",
                "State Management (Redux/Context)",
                "Authentication Flow",
                "Real-time Updates with Socket.io",
                "File Upload and Storage",
                "Error Handling"
            ],
            exercises: [
                "Build a full-stack CRUD application",
                "Implement user authentication",
                "Add real-time features"
            ]
        },
        {
            module: "Module 5: Advanced Topics",
            description: "Explore advanced concepts and best practices in MERN development.",
            topics: [
                "Performance Optimization",
                "Testing (Jest, React Testing Library)",
                "TypeScript Integration",
                "Server-Side Rendering",
                "Progressive Web Apps",
                "GraphQL Implementation"
            ],
            exercises: [
                "Write unit and integration tests",
                "Optimize application performance",
                "Add TypeScript to a project"
            ]
        },
        {
            module: "Module 6: Deployment and DevOps",
            description: "Learn to deploy and maintain MERN applications in production.",
            topics: [
                "Deployment Strategies",
                "CI/CD Pipeline Setup",
                "Docker Containerization",
                "Environment Configuration",
                "Monitoring and Logging",
                "Security Best Practices"
            ],
            exercises: [
                "Deploy to cloud platforms",
                "Set up automated deployment",
                "Configure monitoring tools"
            ]
        }
    ],
    projects: [
        "Build a social media platform",
        "Create an e-commerce website",
        "Develop a real-time chat application",
        "Implement a project management tool"
    ],
    certification: {
        available: true,
        details: "Upon completion, receive a certificate in MERN Stack Development"
    }
};
