import { Icon } from "@iconify/react";
import Image from "next/image";

const Credentials = () => {
    const experience = [
        {
            role: "Technical Architect",
            company: "Capgemini",
            duration: "8+ years",
            highlights: [
                "Led enterprise integration projects for Fortune 500 clients",
                "Managed teams of 20+ developers",
                "Implemented MuleSoft and Dell Boomi solutions",
                "Designed microservices architectures"
            ]
        }
    ];

    const certifications = [
        "MuleSoft Certified Integration Architect",
        "Dell Boomi Professional Developer",
        "AWS Certified Solutions Architect",
        "MongoDB Certified Developer"
    ];

    const expertise = [
        {
            category: "Integration Platforms",
            skills: ["MuleSoft", "Dell Boomi", "Apache Camel"]
        },
        {
            category: "Cloud Platforms",
            skills: ["AWS", "Azure", "GCP"]
        },
        {
            category: "Development",
            skills: ["MERN Stack", "Java", "Python"]
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-midnight_text mb-4">Professional Background</h2>
                    <p className="text-gray-600">18+ years of enterprise technology leadership</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Experience */}
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Icon icon="mdi:briefcase" className="text-primary text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-midnight_text">Enterprise Experience</h3>
                        </div>
                        
                        {experience.map((exp, index) => (
                            <div key={index} className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <h4 className="font-semibold text-primary">{exp.role}</h4>
                                    <span className="text-gray-600">{exp.duration}</span>
                                </div>
                                <p className="text-gray-700 mb-3">{exp.company}</p>
                                <ul className="space-y-2">
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-600">
                                            <Icon icon="mdi:check-circle" className="text-primary text-xl mt-1" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Icon icon="mdi:certificate" className="text-primary text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-midnight_text">Certifications</h3>
                        </div>
                        
                        <ul className="space-y-3">
                            {certifications.map((cert, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <Icon icon="mdi:check-decagram" className="text-primary text-xl" />
                                    <span className="text-gray-700">{cert}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Technical Expertise */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <Icon icon="mdi:code-braces" className="text-primary text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-midnight_text">Technical Expertise</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {expertise.map((category, index) => (
                            <div key={index}>
                                <h4 className="font-semibold text-primary mb-3">{category.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Credentials;
