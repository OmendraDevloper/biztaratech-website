import { CourseSyllabus } from "@/types/syllabus";

export const awscloudcomputingSyllabus: CourseSyllabus = {
    overview: "Master cloud computing with AWS from basics to advanced concepts. Learn to architect, deploy, and manage scalable, highly available applications on Amazon Web Services.",
    prerequisites: [
        "Basic understanding of computing concepts",
        "Familiarity with Linux command line",
        "Basic networking knowledge"
    ],
    learningOutcomes: [
        "Design and implement AWS cloud solutions",
        "Deploy scalable and secure applications",
        "Manage AWS infrastructure and services",
        "Implement cloud security best practices",
        "Optimize cloud costs and performance"
    ],
    duration: "12 weeks",
    modules: [
        {
            module: "Module 1: AWS Fundamentals",
            description: "Get started with AWS cloud computing basics and core services.",
            topics: [
                "Introduction to Cloud Computing",
                "AWS Global Infrastructure",
                "AWS Management Console",
                "Identity and Access Management (IAM)",
                "AWS Command Line Interface (CLI)"
            ],
            exercises: [
                "Set up AWS account and IAM users",
                "Use AWS Management Console",
                "Practice AWS CLI commands"
            ]
        },
        {
            module: "Module 2: Compute Services",
            description: "Learn about AWS compute services and their applications.",
            topics: [
                "Amazon EC2 Fundamentals",
                "Auto Scaling and Load Balancing",
                "AWS Lambda and Serverless",
                "Container Services (ECS/EKS)",
                "Instance Management"
            ],
            exercises: [
                "Launch and manage EC2 instances",
                "Create auto-scaling groups",
                "Deploy serverless applications"
            ]
        },
        {
            module: "Module 3: Storage and Database Services",
            description: "Master AWS storage solutions and database services.",
            topics: [
                "Amazon S3 and Storage Classes",
                "EBS and EFS Storage",
                "RDS and Aurora",
                "DynamoDB",
                "Backup and Recovery"
            ],
            exercises: [
                "Configure S3 buckets and policies",
                "Set up RDS databases",
                "Implement backup strategies"
            ]
        },
        {
            module: "Module 4: Networking and Security",
            description: "Understand AWS networking components and security best practices.",
            topics: [
                "VPC Design and Implementation",
                "Security Groups and NACLs",
                "Route 53 DNS Services",
                "AWS Certificate Manager",
                "AWS Shield and WAF"
            ],
            exercises: [
                "Create and configure VPCs",
                "Implement network security",
                "Set up DNS routing"
            ]
        },
        {
            module: "Module 5: Application Services",
            description: "Explore AWS application services and integration.",
            topics: [
                "Simple Queue Service (SQS)",
                "Simple Notification Service (SNS)",
                "API Gateway",
                "CloudFront CDN",
                "Elastic Beanstalk"
            ],
            exercises: [
                "Build message-based applications",
                "Deploy APIs with API Gateway",
                "Configure CDN distributions"
            ]
        },
        {
            module: "Module 6: Monitoring and DevOps",
            description: "Learn to monitor AWS resources and implement DevOps practices.",
            topics: [
                "CloudWatch Monitoring",
                "CloudTrail Auditing",
                "DevOps on AWS",
                "CI/CD Pipeline Setup",
                "Infrastructure as Code"
            ],
            exercises: [
                "Set up monitoring and alerts",
                "Create CI/CD pipelines",
                "Deploy with CloudFormation"
            ]
        }
    ],
    projects: [
        "Build a highly available web application",
        "Implement a serverless data processing pipeline",
        "Create a multi-region disaster recovery solution",
        "Deploy a microservices architecture"
    ],
    certification: {
        available: true,
        details: "Upon completion, receive a certificate in AWS Cloud Computing and prepare for AWS Certified Solutions Architect certification"
    }
};
