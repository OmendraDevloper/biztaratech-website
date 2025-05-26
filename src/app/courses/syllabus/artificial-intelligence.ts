import { CourseSyllabus } from "@/types/syllabus";

export const artificialintelligenceSyllabus: CourseSyllabus = {
    overview: "Get hands-on experience with Artificial Intelligence through practical applications. Learn the fundamentals of AI, machine learning, and deep learning while building real-world projects.",
    prerequisites: [
        "Basic Python programming knowledge",
        "Understanding of basic mathematics and statistics",
        "Familiarity with data structures and algorithms"
    ],
    learningOutcomes: [
        "Understand core AI concepts and methodologies",
        "Build and train machine learning models",
        "Implement neural networks and deep learning solutions",
        "Apply AI to solve real-world problems",
        "Deploy AI models in production environments"
    ],
    duration: "10 weeks",
    modules: [
        {
            module: "Module 1: Introduction to Artificial Intelligence",
            description: "Understand the fundamentals of AI and its applications in today's world.",
            topics: [
                "What is Artificial Intelligence?",
                "Types of AI: Narrow vs General AI",
                "AI Applications and Use Cases",
                "Python for AI Development",
                "Setting up the Development Environment"
            ],
            exercises: [
                "Install and configure Python AI development environment",
                "Basic Python programming exercises",
                "Simple AI application examples"
            ]
        },
        {
            module: "Module 2: Machine Learning Fundamentals",
            description: "Learn the core concepts of machine learning and implement basic algorithms.",
            topics: [
                "Introduction to Machine Learning",
                "Supervised vs Unsupervised Learning",
                "Data Preprocessing and Feature Engineering",
                "Model Training and Evaluation",
                "Common ML Algorithms"
            ],
            exercises: [
                "Data preprocessing with pandas and numpy",
                "Implement basic ML algorithms",
                "Model evaluation and validation"
            ]
        },
        {
            module: "Module 3: Deep Learning and Neural Networks",
            description: "Dive into neural networks and deep learning architectures.",
            topics: [
                "Neural Networks Fundamentals",
                "Deep Learning Frameworks (TensorFlow/PyTorch)",
                "Convolutional Neural Networks (CNN)",
                "Recurrent Neural Networks (RNN)",
                "Transfer Learning"
            ],
            exercises: [
                "Build a basic neural network",
                "Image classification with CNNs",
                "Text analysis with RNNs"
            ]
        },
        {
            module: "Module 4: Natural Language Processing",
            description: "Master techniques for processing and analyzing human language.",
            topics: [
                "Text Processing Fundamentals",
                "Language Models and Word Embeddings",
                "Sentiment Analysis",
                "Named Entity Recognition",
                "Machine Translation"
            ],
            exercises: [
                "Build a sentiment analysis model",
                "Implement a chatbot",
                "Create a text classification system"
            ]
        },
        {
            module: "Module 5: Computer Vision",
            description: "Learn to process and analyze visual information using AI.",
            topics: [
                "Image Processing Basics",
                "Object Detection and Recognition",
                "Face Detection and Recognition",
                "Image Segmentation",
                "Video Analysis"
            ],
            exercises: [
                "Implement object detection",
                "Build a face recognition system",
                "Create an image segmentation model"
            ]
        },
        {
            module: "Module 6: AI in Production",
            description: "Deploy and maintain AI solutions in production environments.",
            topics: [
                "Model Deployment Strategies",
                "API Development for AI Models",
                "Performance Optimization",
                "Monitoring and Maintenance",
                "Ethical AI Considerations"
            ],
            exercises: [
                "Deploy an AI model as an API",
                "Set up monitoring for AI systems",
                "Implement model updates and versioning"
            ]
        }
    ],
    projects: [
        "Build an intelligent image recognition system",
        "Create a natural language processing application",
        "Develop a predictive analytics solution",
        "Implement a recommendation system"
    ],
    certification: {
        available: true,
        details: "Upon completion, receive a certificate in Practical Artificial Intelligence"
    }
};
