import { Icon } from "@iconify/react";

const OurApproach = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-midnight_text mb-4">Enterprise-Grade Methodology</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">Leveraging 18+ years of enterprise experience to deliver robust, scalable, and secure solutions</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="relative">
                        <div className="bg-white rounded-xl p-6 shadow-md h-full">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Icon icon="mdi:lighthouse" className="text-primary text-3xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-midnight_text">Discovery & Strategy</h3>
                            </div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <Icon icon="mdi:check-circle" className="text-primary text-xl mt-1" />
                                    <span>Thorough requirements analysis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon icon="mdi:check-circle" className="text-primary text-xl mt-1" />
                                    <span>Technical architecture planning</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon icon="mdi:check-circle" className="text-primary text-xl mt-1" />
                                    <span>ROI assessment</span>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                            <Icon icon="mdi:arrow-right" className="text-primary text-4xl" />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white rounded-xl p-6 shadow-md h-full">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Icon icon="mdi:code-braces" className="text-primary text-3xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-midnight_text">Development</h3>
                            </div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <Icon icon="mdi:check-circle" className="text-primary text-xl mt-1" />
                                    <span>Agile methodology</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon icon="mdi:check-circle" className="text-primary text-xl mt-1" />
                                    <span>Enterprise design patterns</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon icon="mdi:check-circle" className="text-primary text-xl mt-1" />
                                    <span>Best-in-class security</span>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                            <Icon icon="mdi:arrow-right" className="text-primary text-4xl" />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white rounded-xl p-6 shadow-md h-full">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Icon icon="mdi:test-tube" className="text-primary text-3xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-midnight_text">Quality Assurance</h3>
                            </div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <Icon icon="mdi:check-circle" className="text-primary text-xl mt-1" />
                                    <span>Automated testing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon icon="mdi:check-circle" className="text-primary text-xl mt-1" />
                                    <span>Performance testing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Icon icon="mdi:check-circle" className="text-primary text-xl mt-1" />
                                    <span>Security audits</span>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                            <Icon icon="mdi:arrow-right" className="text-primary text-4xl" />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md h-full">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Icon icon="mdi:rocket-launch" className="text-primary text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-midnight_text">Deployment</h3>
                        </div>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-2">
                                <Icon icon="mdi:check-circle" className="text-primary text-xl mt-1" />
                                <span>CI/CD implementation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon icon="mdi:check-circle" className="text-primary text-xl mt-1" />
                                <span>Production monitoring</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon icon="mdi:check-circle" className="text-primary text-xl mt-1" />
                                <span>Ongoing support</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our enterprise-grade methodology ensures reliable, scalable, and secure solutions that meet your business objectives.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
