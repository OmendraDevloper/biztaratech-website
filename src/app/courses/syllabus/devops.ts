import { CourseSyllabus } from "@/types/syllabus";

export const devopsSyllabus: CourseSyllabus = {
    overview: "Master modern DevOps practices and tools in this comprehensive course. Learn CI/CD, infrastructure automation, containerization, and cloud deployment while building practical skills for streamlining software delivery.",
    prerequisites: [
        "Basic understanding of Linux/Unix commands",
        "Familiarity with version control (Git)",
        "Basic programming knowledge in any language"
    ],
    learningOutcomes: [
        "Implement CI/CD pipelines using industry-standard tools",
        "Master container technologies like Docker and Kubernetes",
        "Deploy and manage applications in cloud environments",
        "Automate infrastructure using Infrastructure as Code (IaC)",
        "Implement monitoring and logging solutions"
    ],
    duration: "8 weeks",
    modules: [
        {
            module: "Module 1: DevOps Fundamentals",
            description: "Understand DevOps principles, culture, and practices that drive modern software development.",
            topics: [
                "Introduction to DevOps principles and culture",
                "Understanding CI/CD fundamentals",
                "Version control with Git and GitHub",
                "Agile and DevOps collaboration"
            ],
            exercises: [
                "Set up Git workflow with branching strategies",
                "Create and manage GitHub repositories",
                "Implement basic automation scripts"
            ]
        },
        {
            module: "Module 2: Continuous Integration",
            description: "Learn to implement automated build and test processes using modern CI tools.",
            topics: [
                "Jenkins pipeline configuration",
                "GitHub Actions fundamentals",
                "Automated testing strategies",
                "Code quality and security scanning"
            ],
            exercises: [
                "Configure Jenkins pipeline for a sample project",
                "Create GitHub Actions workflow",
                "Implement automated tests and quality checks"
            ]
        },
        {
            module: "Module 3: Containerization with Docker",
            description: "Master container technology to build, ship, and run applications consistently.",
            topics: [
                "Docker fundamentals and architecture",
                "Creating and managing Docker images",
                "Docker Compose for multi-container apps",
                "Container security best practices"
            ],
            exercises: [
                "Build custom Docker images",
                "Create multi-container applications",
                "Implement container security measures"
            ]
        },
        {
            module: "Module 4: Kubernetes Orchestration",
            description: "Learn to orchestrate containerized applications with Kubernetes.",
            topics: [
                "Kubernetes architecture and components",
                "Pod and deployment management",
                "Service and networking concepts",
                "ConfigMaps and Secrets"
            ],
            exercises: [
                "Deploy applications on Kubernetes cluster",
                "Implement scaling and updates",
                "Configure persistent storage"
            ]
        },
        {
            module: "Module 5: Infrastructure as Code",
            description: "Automate infrastructure provisioning using modern IaC tools.",
            topics: [
                "Terraform fundamentals",
                "AWS/Azure infrastructure automation",
                "Ansible for configuration management",
                "Infrastructure testing"
            ],
            exercises: [
                "Create infrastructure with Terraform",
                "Implement Ansible playbooks",
                "Test and validate infrastructure"
            ]
        },
        {
            module: "Module 6: Monitoring and Logging",
            description: "Implement comprehensive monitoring and logging solutions.",
            topics: [
                "Prometheus and Grafana setup",
                "ELK stack implementation",
                "Application performance monitoring",
                "Alert management"
            ],
            exercises: [
                "Set up monitoring dashboards",
                "Configure log aggregation",
                "Create alerting rules"
            ]
        }
    ],
    projects: [
        "Build end-to-end CI/CD pipeline for a web application",
        "Implement microservices architecture with Kubernetes",
        "Create automated cloud infrastructure with Terraform"
    ],
    certification: {
        available: true,
        details: "Upon completion, receive a certificate in Modern DevOps Practices"
    }
};
