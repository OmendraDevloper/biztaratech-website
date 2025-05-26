import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const CaseStudies = () => {
    const caseStudies = [
        {
            title: "Healthcare Integration with MuleSoft",
            description: "Modernizing healthcare data exchange with FHIR-compliant APIs and real-time integration",
            tech: ["MuleSoft", "FHIR", "API Management"],
            benefits: ["70% faster data exchange", "99.9% uptime", "HIPAA compliant"],
            image: "/images/companies/mule.png"
        },
        {
            title: "Enterprise SaaS Integration using Dell Boomi",
            description: "Streamlining multi-cloud application integration for a Fortune 500 company",
            tech: ["Dell Boomi", "AtomSphere", "EDI"],
            benefits: ["85% automation achieved", "60% cost reduction", "Real-time sync"],
            image: "/images/companies/boomi.png"
        },
        {
            title: "Modern Web Platform with MERN Stack",
            description: "Building a scalable e-learning platform using modern web technologies",
            tech: ["MongoDB", "Express.js", "React", "Node.js"],
            benefits: ["50K+ concurrent users", "300ms response time", "99% uptime"],
            image: "/images/companies/mern.png"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-midnight_text mb-4">Solution Blueprints</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Drawing from our enterprise experience, here's how we approach different integration challenges
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                            <Image
                                src={study.image}
                                alt={study.title}
                                width={80}
                                height={80}
                                className="mb-4"
                            />
                            <h3 className="text-xl font-semibold text-midnight_text mb-3">{study.title}</h3>
                            <p className="text-gray-600 mb-4">{study.description}</p>
                            
                            <div className="mb-4">
                                <h4 className="font-semibold text-primary mb-2">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {study.tech.map((tech, i) => (
                                        <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-primary mb-2">Key Benefits:</h4>
                                <ul className="space-y-2">
                                    {study.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-600">
                                            <Icon icon="mdi:check-circle" className="text-primary text-xl" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                        Discuss Your Project
                        <Icon icon="mdi:arrow-right" className="text-xl" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
