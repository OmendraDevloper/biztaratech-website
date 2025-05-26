// Example syllabus for MuleSoft with AI
export const syllabus = [
  {
    module: "Module 1: Course Introduction & AI Foundations",
    description: "Kick off your journey by understanding the fundamentals of Artificial Intelligence and MuleSoft, and why their integration is a game-changer for modern enterprises. Set clear learning objectives and get inspired by real-world AI applications.",
    topics: [
      "What is AI? Types (Narrow AI, General AI), Real-World Examples",
      "What is MuleSoft? Platform Overview and Enterprise Use Cases",
      "Why Combine AI with MuleSoft? Benefits for Smart Automation",
      "Course Objectives: API Design, Mule Flows, AI API Calls, Use Cases",
      "Overview Video or Interactive Quiz: Identify AI-powered Products"
    ],
    exercises: [
      "Interactive quiz: Identify AI-powered products in daily life"
    ]
  },
  {
    module: "Module 2: MuleSoft Essentials for AI Integration",
    description: "Build a strong foundation in MuleSoft architecture and hands-on skills. Learn to create flows, call REST APIs, and handle errors—essential skills for any integration professional.",
    topics: [
      "MuleSoft Architecture & API-led Connectivity (Experience, Process, System APIs)",
      "Anypoint Studio Overview: Interface Walkthrough, Mule Applications Basics",
      "Creating Flows: HTTP Listener, Logger, and Core Components",
      "Calling REST APIs: HTTP Request Connector",
      "Error Handling & Logging: Try-Catch Scope, Logger Component"
    ],
    exercises: [
      "Build and deploy a simple Mule app that calls a public REST API",
      "Error handling demo in Anypoint Studio"
    ]
  },
  {
    module: "Module 3: AI Basics for Integrators",
    description: "Demystify AI, ML, and NLP. Explore popular AI services and their integration use cases, preparing you to leverage AI in real-world scenarios.",
    topics: [
      "Understanding AI, ML, NLP: Definitions, Concepts, Examples",
      "Popular AI Services: OpenAI, AWS Rekognition, Google Vision, Azure Cognitive Services",
      "AI Use Cases in Integration: Chatbots, Image Recognition, Document Processing"
    ],
    exercises: [
      "Hands-on demo: Call OpenAI playground to generate text",
      "Overview of AWS Rekognition console and capabilities"
    ]
  },
  {
    module: "Module 4: Calling AI APIs from MuleSoft",
    description: "Master the art of connecting MuleSoft with leading AI APIs. Learn setup, authentication, and best practices for robust integrations.",
    topics: [
      "OpenAI API: Setup, Endpoints, Request/Response Formats",
      "AWS Rekognition API: Setup, Image Recognition Examples",
      "Google Vision API: OCR and Image Labeling",
      "Implementing Calls in MuleSoft: HTTP Request Connector, Headers, Payloads"
    ],
    exercises: [
      "Create a MuleSoft flow that calls OpenAI API for text completion",
      "Create a Mule flow to upload an image and get labels from AWS Rekognition"
    ]
  },
  {
    module: "Module 5: Designing Intelligent Flows",
    description: "Transform and route data dynamically using AI results. Learn advanced DataWeave, error handling, and monitoring for production-grade solutions.",
    topics: [
      "DataWeave Transformation: Mapping and Transforming API Responses",
      "Dynamic Routing: Route Messages Based on AI API Results",
      "Error Handling: Failed AI Calls, Retry Logic",
      "Logging & Monitoring: Logger Component, Flow Tracing"
    ],
    exercises: [
      "Transform OpenAI API JSON response to a simplified text output",
      "Route to different flows based on confidence score from AWS Rekognition"
    ]
  },
  {
    module: "Module 6: Deploying and Monitoring AI-Integrated APIs",
    description: "Deploy your intelligent APIs to the cloud, manage them at scale, and monitor their performance for reliability and cost efficiency.",
    topics: [
      "Deploying on CloudHub: Packaging Apps, Deployment Steps",
      "API Management & Monitoring: Alerts, Dashboards for AI API Usage",
      "Scaling: Auto-scaling Considerations for High Load AI Integrations"
    ],
    exercises: [
      "Deploy Mule app with AI calls to CloudHub",
      "Configure and view monitoring dashboards"
    ]
  },
  {
    module: "Module 7: Real-World Use Cases & Projects",
    description: "Apply your skills to real-world projects—build chatbots, document summarizers, and image classifiers. See end-to-end integration in action.",
    topics: [
      "Chatbot Integration: Power Chatbots with AI via MuleSoft",
      "Document Summarization: Use OpenAI to Summarize Text",
      "Image Classification: Automate with AWS Rekognition",
      "End-to-End Project Demo: Data Ingestion to AI Processing"
    ],
    exercises: [
      "Build a chatbot that answers FAQs using AI calls in MuleSoft",
      "Document summarization app with text input and AI response"
    ]
  },
  {
    module: "Module 8: Advanced Topics and Best Practices",
    description: "Go beyond the basics—secure your integrations, optimize costs, troubleshoot issues, and stay ahead with the latest trends in AI and integration.",
    topics: [
      "Security Best Practices: API Keys, OAuth, Policies in MuleSoft",
      "Cost Optimization: Managing API Usage, Caching Results",
      "Troubleshooting: Common Issues and Solutions in AI Integration",
      "Future Trends: Emerging AI Tech and Its Impact on Integration"
    ],
    exercises: [
      "Implement MuleSoft policies for API key security",
      "Cost analysis of AI API calls in a demo project"
    ]
  },
  {
    module: "Bonus: Capstone Project, Certification & Lifelong Learning",
    description: "Consolidate your learning with a capstone project, prepare for certification, and join a vibrant community for ongoing growth.",
    topics: [
      "Capstone Project: Design & Implement an AI-Enhanced Integration",
      "Best Practices for Documentation & Presentation",
      "MuleSoft Certification Preparation (MCIA, MCPA)",
      "Interview Preparation & Portfolio Building",
      "Career Guidance: Roles, Salaries, and Growth Paths",
      "Access to Exclusive Community Forums",
      "Recommended Books, Blogs, and YouTube Channels",
      "Monthly Webinars and Q&A Sessions",
      "Continuous Updates on AI & Integration Trends"
    ]
  }
];
