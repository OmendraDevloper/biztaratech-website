import { Icon } from "@iconify/react";
import Image from "next/image";

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-midnight_text mb-4">Why Partner with Biztara Technologies?</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">Led by industry veterans with proven enterprise experience, we bring Fortune 500 best practices to businesses of all sizes.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Icon icon="mdi:integration" className="text-primary text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-midnight_text mb-2">Enterprise Integration Expertise</h3>
                                <p className="text-gray-600">18+ years experience delivering complex integration solutions at Capgemini and other Fortune 500 companies.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Icon icon="mdi:certificate-outline" className="text-primary text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-midnight_text mb-2">Certified Professionals</h3>
                                <p className="text-gray-600">Team led by certified experts in MuleSoft, Dell Boomi, AWS, and modern web technologies.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Icon icon="mdi:chart-timeline-variant" className="text-primary text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-midnight_text mb-2">End-to-End Solutions</h3>
                                <p className="text-gray-600">From strategy to implementation and training, we provide comprehensive digital transformation solutions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Icon icon="mdi:trending-up" className="text-primary text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-midnight_text mb-2">Industry Best Practices</h3>
                                <p className="text-gray-600">Implement Fortune 500 methodologies and practices refined over 18+ years of enterprise experience.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Icon icon="mdi:school-outline" className="text-primary text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-midnight_text mb-2">Training Excellence</h3>
                                <p className="text-gray-600">Industry-aligned curriculum developed by practitioners with real-world enterprise experience.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Icon icon="mdi:handshake-outline" className="text-primary text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-midnight_text mb-2">Dedicated Support</h3>
                                <p className="text-gray-600">Personal attention from senior technical architects ensures your project's success.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-white rounded-xl p-8 shadow-md">
                    <h3 className="text-2xl font-bold text-midnight_text mb-6 text-center">Our Enterprise Background</h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-3xl font-bold text-primary mb-2">18+</p>
                            <p className="text-gray-600">Years Enterprise Experience</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary mb-2">500+</p>
                            <p className="text-gray-600">Integration Projects</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary mb-2">50+</p>
                            <p className="text-gray-600">Enterprise Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
