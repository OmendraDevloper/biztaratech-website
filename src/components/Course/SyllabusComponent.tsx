import { CourseSyllabus } from "@/types/syllabus";
import { Icon } from "@iconify/react";

interface SyllabusComponentProps {
    syllabus: CourseSyllabus;
    courseTitle: string;
}

const SyllabusComponent = ({ syllabus, courseTitle }: SyllabusComponentProps) => {
    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-midnight_text mb-6">{courseTitle}</h1>
            
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">Course Overview</h2>
                <p className="text-gray-700">{syllabus.overview}</p>
            </div>

            {/* Key Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Prerequisites */}
                {syllabus.prerequisites && (
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-xl font-semibold text-primary mb-4">Prerequisites</h2>
                        <ul className="space-y-2">
                            {syllabus.prerequisites.map((prereq, index) => (
                                <li key={index} className="flex items-start">
                                    <Icon icon="material-symbols:check-circle-outline-rounded" className="text-primary mt-1 mr-2" />
                                    <span className="text-gray-700">{prereq}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Learning Outcomes */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-semibold text-primary mb-4">What You'll Learn</h2>
                    <ul className="space-y-2">
                        {syllabus.learningOutcomes.map((outcome, index) => (
                            <li key={index} className="flex items-start">
                                <Icon icon="material-symbols:check-circle-outline-rounded" className="text-primary mt-1 mr-2" />
                                <span className="text-gray-700">{outcome}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Course Duration */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <div className="flex items-center">
                    <Icon icon="material-symbols:timer-outline" className="text-2xl text-primary mr-2" />
                    <h2 className="text-xl font-semibold text-primary">Course Duration: {syllabus.duration}</h2>
                </div>
            </div>

            {/* Modules */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">Course Content</h2>
                {syllabus.modules.map((module, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-xl font-semibold text-midnight_text mb-2">{module.module}</h3>
                        <p className="text-gray-700 mb-4">{module.description}</p>
                        
                        <div className="space-y-4">
                            {/* Topics */}
                            <div>
                                <h4 className="text-lg font-medium text-primary mb-2">Topics Covered</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                    {module.topics.map((topic, topicIndex) => (
                                        <li key={topicIndex}>{topic}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Exercises */}
                            {module.exercises && (
                                <div>
                                    <h4 className="text-lg font-medium text-primary mb-2">Practical Exercises</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                        {module.exercises.map((exercise, exerciseIndex) => (
                                            <li key={exerciseIndex}>{exercise}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Projects */}
            {syllabus.projects && (
                <div className="bg-white rounded-xl shadow-md p-6 mt-8">
                    <h2 className="text-2xl font-semibold text-primary mb-4">Projects</h2>
                    <ul className="space-y-2">
                        {syllabus.projects.map((project, index) => (
                            <li key={index} className="flex items-start">
                                <Icon icon="material-symbols:rocket-launch-outline" className="text-primary mt-1 mr-2" />
                                <span className="text-gray-700">{project}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Certification */}
            {syllabus.certification && syllabus.certification.available && (
                <div className="bg-white rounded-xl shadow-md p-6 mt-8">
                    <h2 className="text-2xl font-semibold text-primary mb-4">Certification</h2>
                    <div className="flex items-start">
                        <Icon icon="material-symbols:workspace-premium-outline" className="text-primary mt-1 mr-2" />
                        <p className="text-gray-700">{syllabus.certification.details}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SyllabusComponent;
