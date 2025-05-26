"use client";
import { courseData } from "@/app/api/data";
import Image from "next/image";
import Link from "next/link";
import { getImagePrefix } from "@/utils/util";
import { Icon } from "@iconify/react";

export default function AllCoursesPage() {
  return (
    <section className="min-h-[70vh] py-12 bg-gray-50 pt-32">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-midnight_text mb-10 drop-shadow-sm">
          All Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-course-shadow p-6 flex flex-col h-full"
            >
              <div className="relative rounded-3xl overflow-hidden mb-4">
                <Image
                  src={`${getImagePrefix()}${course.imgSrc}`}
                  alt={course.heading}
                  width={389}
                  height={220}
                  className="w-full object-cover"
                />
              </div>
              <Link href={`/courses/${course.slug}`} className="group">
                <h2 className="text-lg font-semibold text-midnight_text mb-2 group-hover:text-primary transition-colors">
                  {course.heading}
                </h2>
              </Link>
              <p className="text-gray-800 text-base mb-2">{course.name}</p>
              <div className="flex items-center gap-4 mb-2">
                <Icon
                  icon="tabler:star-filled"
                  className="text-yellow-500 text-xl"
                />
                <span className="text-lg font-medium text-primary">
                  {course.rating}
                </span>
                <span className="text-base text-gray-800">
                  ({course.students} students)
                </span>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <Icon
                  icon="solar:notebook-minimalistic-outline"
                  className="text-primary text-xl"
                />
                <span className="text-base text-gray-800">
                  {course.classes} classes
                </span>
              </div>
              {/* No price shown */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
