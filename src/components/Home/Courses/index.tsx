"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { courseData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";
import { IoIosArrowForward } from 'react-icons/io';

const Courses = () => {
    // Select all courses
    const [currentIndex, setCurrentIndex] = useState(0);
    const coursesPerPage = 3;
    const totalPages = Math.ceil(courseData.length / coursesPerPage);
    
    // Get current page courses
    const featuredCourses = courseData.slice(
        currentIndex * coursesPerPage,
        (currentIndex + 1) * coursesPerPage
    );

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex + 1 >= totalPages ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex - 1 < 0 ? totalPages - 1 : prevIndex - 1
        );
    };

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        return (
            <>
                {[...Array(fullStars)].map((_, idx) => (
                    <Icon key={`full-${idx}`} icon="tabler:star-filled" className="text-yellow-500 text-xl inline-block" />
                ))}
                {halfStars > 0 && (
                    <Icon key="half" icon="tabler:star-half-filled" className="text-yellow-500 text-xl inline-block" />
                )}
                {[...Array(emptyStars)].map((_, idx) => (
                    <Icon key={`empty-${idx}`} icon="tabler:star-filled" className="text-gray-400 text-xl inline-block" />
                ))}
            </>
        );
    };

    return (
        <section id="courses" className="pt-8 pb-24 scroll-mt-28 bg-gradient-to-b from-white to-blue-50">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="flex flex-col items-center justify-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-midnight_text mb-4 text-center drop-shadow-sm">Featured Courses</h2>
                    <p className="text-gray-600 text-center max-w-2xl mb-8">Master enterprise integration and development with our industry-leading courses</p>
                    <Link href={'/courses'} className="inline-flex items-center gap-2 bg-primary text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50">
                        View All Courses <IoIosArrowForward size={22} />
                    </Link>
                </div>

                <div className="relative">
                    {/* Navigation Arrows */}
                    {totalPages > 1 && (
                        <>
                            <button 
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all"
                                aria-label="Previous courses"
                            >
                                <Icon icon="heroicons:chevron-left" className="w-6 h-6 text-primary" />
                            </button>
                            <button 
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all"
                                aria-label="Next courses"
                            >
                                <Icon icon="heroicons:chevron-right" className="w-6 h-6 text-primary" />
                            </button>
                        </>
                    )}

                    {/* Courses Grid with Animation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300">
                        {featuredCourses.map((course, i) => (
                            <Link href={`/courses/${course.slug}`} key={i} className="group">
                                <div className='bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col'>
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <Image 
                                            src={`${getImagePrefix()}${course.imgSrc}`} 
                                            alt={course.heading}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {i === 0 && (
                                            <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                                                Most Popular
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="p-6 flex-grow">
                                        <div className="flex items-center gap-2 mb-3">
                                            {renderStars(course.rating)}
                                            <span className="text-gray-600 text-sm">({course.rating})</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-midnight_text mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {course.heading}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">{course.name}</p>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-2">
                                                <Icon icon="heroicons:users" className="text-gray-400" />
                                                <span className="text-gray-600 text-sm">{course.students} students</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Icon icon="heroicons:book-open" className="text-gray-400" />
                                                <span className="text-gray-600 text-sm">{course.classes} lessons</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    {totalPages > 1 && (
                        <div className="flex justify-center gap-2 mt-8">
                            {[...Array(totalPages)].map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                                        currentIndex === idx ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to page ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Courses;
