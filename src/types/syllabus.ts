export interface SyllabusModule {
    module: string;
    description: string;
    topics: string[];
    exercises?: string[];
}

export interface CourseSyllabus {
    overview: string;
    prerequisites?: string[];
    learningOutcomes: string[];
    duration: string;
    modules: SyllabusModule[];
    projects?: string[];
    certification?: {
        available: boolean;
        details?: string;
    };
}
