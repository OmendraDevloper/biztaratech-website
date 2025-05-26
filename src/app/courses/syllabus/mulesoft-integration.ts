import { CourseSyllabus } from "@/types/syllabus";

export const mulesoftintegrationSyllabus: CourseSyllabus = {
    overview: "Master MuleSoft integration development with our comprehensive course. Learn to design, build, and deploy enterprise-grade integration solutions using MuleSoft's Anypoint Platform.",
    prerequisites: [
        "Basic programming knowledge",
        "Understanding of web services and APIs",
        "Familiarity with XML and JSON"
    ],
    learningOutcomes: [
        "Design and implement enterprise integration patterns",
        "Build secure and scalable APIs using MuleSoft",
        "Master DataWeave transformation language",
        "Deploy and manage MuleSoft applications in CloudHub",
        "Implement error handling and monitoring solutions"
    ],
    duration: "8 weeks",
    modules: [
        {
            module: "Module 1: MuleSoft Fundamentals",
            description: "Get started with MuleSoft's Anypoint Platform and understand core integration concepts.",
            topics: [
                "Introduction to MuleSoft and Anypoint Platform",
                "API-led Connectivity Approach",
                "Mule 4 Architecture Overview",
                "Setting up Development Environment"
            ],
            exercises: [
                "Install and configure Anypoint Studio",
                "Create your first Mule application",
                "Basic flow implementation"
            ]
        },
        {
            module: "Module 2: Building APIs with MuleSoft",
            description: "Learn to design and implement APIs following REST best practices.",
            topics: [
                "API Design Best Practices",
                "RAML/OAS Specification",
                "API Implementation with MuleSoft",
                "API Security Fundamentals"
            ],
            exercises: [
                "Design an API using API Designer",
                "Implement a REST API",
                "Add security to your API"
            ]
        },
        {
            module: "Module 3: Data Transformation",
            description: "Master DataWeave 2.0 for complex data transformations.",
            topics: [
                "DataWeave 2.0 Fundamentals",
                "Complex Data Transformations",
                "Working with Different Formats",
                "DataWeave Functions and Operators"
            ],
            exercises: [
                "Transform complex JSON and XML",
                "Create reusable DataWeave functions",
                "Handle data transformation edge cases"
            ]
        },
        {
            module: "Module 4: Integration Patterns",
            description: "Learn and implement enterprise integration patterns.",
            topics: [
                "Content-Based Routing",
                "Scatter-Gather Pattern",
                "Request-Reply Pattern",
                "Error Handling Patterns"
            ],
            exercises: [
                "Implement routing logic",
                "Build a message aggregator",
                "Create error handling strategies"
            ]
        },
        {
            module: "Module 5: Deployment and Operations",
            description: "Deploy and manage MuleSoft applications in production.",
            topics: [
                "CloudHub Deployment",
                "Application Monitoring",
                "Performance Tuning",
                "CI/CD Pipeline Setup"
            ],
            exercises: [
                "Deploy to CloudHub",
                "Set up monitoring dashboards",
                "Implement CI/CD pipelines"
            ]
        }
    ],
    projects: [
        "Build an e-commerce integration system",
        "Implement a real-time data synchronization solution",
        "Create a microservices-based architecture"
    ],
    certification: {
        available: true,
        details: "Upon completion, receive a certificate in MuleSoft Integration Development"
    }
};
