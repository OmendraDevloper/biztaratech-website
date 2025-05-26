import { courseData } from "@/app/api/data";
import { notFound } from "next/navigation";
import SyllabusComponent from "@/components/Course/SyllabusComponent";
import { getSyllabus } from "@/lib/get-syllabus";

export default async function CourseSyllabusPage({ params }: { params: { slug: string } }) {
    console.log('Rendering course syllabus for slug:', params.slug);
    
    const course = courseData.find((c) => c.slug === params.slug);
    if (!course) {
        console.error('Course not found for slug:', params.slug);
        notFound();
    }

    console.log('Found course:', course.heading);
    const syllabus = await getSyllabus(params.slug);
    
    if (!syllabus) {
        console.error('Syllabus not found for course:', course.heading);
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            <SyllabusComponent syllabus={syllabus} courseTitle={course.heading} />
        </div>
    );
}
