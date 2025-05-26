import { CourseSyllabus } from "@/types/syllabus";

export const mulesoftAISyllabus: CourseSyllabus = {
    overview: "This comprehensive course combines MuleSoft integration expertise with cutting-edge AI capabilities. Learn how to build intelligent integrations that leverage AI services while mastering MuleSoft fundamentals.",
    prerequisites: [
        "Basic programming knowledge",
        "Understanding of APIs and web services",
        "Familiarity with JSON and XML"
    ],
    learningOutcomes: [
        "Build and deploy MuleSoft applications with AI capabilities",
        "Integrate with popular AI services like OpenAI, AWS, and Google AI",
        "Implement intelligent data transformations and routing",
        "Design error-handling strategies for AI integrations",
        "Create production-ready AI-powered integration solutions"
    ],
    duration: "6 weeks",
    modules: [
        {
            module: "Module 1: Introduction to MuleSoft and AI Integration",
            description: "Get started with MuleSoft platform basics and understand how AI fits into integration scenarios.",
            topics: [
                "MuleSoft architecture overview",
                "API-led connectivity approach",
                "Introduction to AI in integration",
                "Setting up your development environment"
            ],
            exercises: [
                "Install and configure Anypoint Studio",
                "Create your first Mule application",
                "Test basic AI service connectivity"
            ]
        },
        {
            module: "Module 2: MuleSoft Fundamentals",
            description: "Master core MuleSoft concepts and components essential for building integrations.",
            topics: [
                "Mule 4 architecture and components",
                "DataWeave 2.0 transformation language",
                "Flow control and error handling",
                "API implementation and management"
            ],
            exercises: [
                "Build RESTful APIs with MuleSoft",
                "Transform data using DataWeave",
                "Implement error handling patterns"
            ]
        },
        {
            module: "Module 3: AI Services Integration",
            description: "Learn to integrate with various AI services and handle their responses effectively.",
            topics: [
                "OpenAI API integration",
                "AWS AI services (Rekognition, Comprehend)",
                "Google Cloud AI integration",
                "Azure Cognitive Services"
            ],
            exercises: [
                "Build a chatbot integration with OpenAI",
                "Implement image analysis with AWS Rekognition",
                "Create a language processing pipeline"
            ]
        },
        {
            module: "Module 4: Advanced Integration Patterns",
            description: "Explore advanced patterns for robust AI-powered integrations.",
            topics: [
                "Batch processing with AI",
                "Real-time AI processing patterns",
                "Caching and performance optimization",
                "Security best practices"
            ],
            exercises: [
                "Implement batch processing for AI analysis",
                "Build real-time AI processing flows",
                "Secure AI service credentials"
            ]
        },
        {
            module: "Module 5: Production Deployment",
            description: "Learn to deploy and manage AI-powered MuleSoft applications in production.",
            topics: [
                "CloudHub deployment",
                "Monitoring and analytics",
                "Performance tuning",
                "CI/CD pipeline setup"
            ],
            exercises: [
                "Deploy to CloudHub",
                "Set up monitoring dashboards",
                "Configure CI/CD pipelines"
            ]
        }
    ],
    projects: [
        "Build an intelligent document processing system",
        "Create a smart customer service integration",
        "Implement a predictive maintenance system"
    ],
    certification: {
        available: true,
        details: "Upon completion, receive a certificate in MuleSoft AI Integration"
    }
};
