import { CourseSyllabus } from "@/types/syllabus";

export const dellboomiSyllabus: CourseSyllabus = {
    overview: "Gain expertise in Dell Boomi integration platform. Learn to build, deploy, and manage integrations using Boomi AtomSphere to connect cloud and on-premises applications.",
    prerequisites: [
        "Basic programming concepts",
        "Understanding of APIs and web services",
        "Basic knowledge of data formats (XML, JSON)"
    ],
    learningOutcomes: [
        "Create and manage Boomi integrations",
        "Design and implement integration processes",
        "Master data mapping and transformation",
        "Deploy and monitor Boomi solutions",
        "Implement security and error handling"
    ],
    duration: "6 weeks",
    modules: [
        {
            module: "Module 1: Dell Boomi Fundamentals",
            description: "Get started with Dell Boomi AtomSphere platform and understand core integration concepts.",
            topics: [
                "Introduction to Dell Boomi",
                "AtomSphere Architecture",
                "Integration Patterns Overview",
                "Platform Navigation and Setup"
            ],
            exercises: [
                "Set up Boomi AtomSphere account",
                "Create your first integration process",
                "Navigate and use Boomi platform"
            ]
        },
        {
            module: "Module 2: Building Integration Processes",
            description: "Learn to create and configure integration processes in Boomi.",
            topics: [
                "Process Design Fundamentals",
                "Connectors and Operations",
                "Data Mapping Basics",
                "Process Scheduling"
            ],
            exercises: [
                "Build a basic integration process",
                "Configure various connectors",
                "Set up process scheduling"
            ]
        },
        {
            module: "Module 3: Advanced Data Mapping",
            description: "Master data transformation and mapping in Boomi.",
            topics: [
                "Complex Data Mappings",
                "Functions and Operators",
                "Map Console Features",
                "Testing and Debugging Maps"
            ],
            exercises: [
                "Create complex data mappings",
                "Use map functions and operators",
                "Debug mapping issues"
            ]
        },
        {
            module: "Module 4: Error Handling and Monitoring",
            description: "Implement robust error handling and monitoring solutions.",
            topics: [
                "Error Handling Strategies",
                "Process Reporting",
                "Monitoring and Alerts",
                "Logging Best Practices"
            ],
            exercises: [
                "Implement error handling",
                "Set up monitoring and alerts",
                "Configure process reporting"
            ]
        },
        {
            module: "Module 5: Deployment and Management",
            description: "Learn to deploy and manage Boomi integrations in production.",
            topics: [
                "Environment Management",
                "Atom Management",
                "Version Control",
                "Performance Optimization"
            ],
            exercises: [
                "Deploy processes across environments",
                "Manage Atoms and Molecules",
                "Implement version control"
            ]
        }
    ],
    projects: [
        "Build an end-to-end integration solution",
        "Implement a multi-step data synchronization process",
        "Create a real-time integration workflow"
    ],
    certification: {
        available: true,
        details: "Upon completion, receive a certificate in Dell Boomi Integration Development"
    }
};
