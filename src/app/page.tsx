"use client";
import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import OurApproach from "@/components/Home/OurApproach";
import CaseStudies from "@/components/Home/CaseStudies";
import BlogPreview from "@/components/Home/BlogPreview";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <Hero
        title="Enterprise Integration Training & Custom Software Development"
        subtitle="By Industry Professionals with 18+ Years of Experience"
        ctaTraining="Join Our Training Programs"
        ctaDevelopment="Get Custom Software Solutions"
      />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* OUR APPROACH */}
      <OurApproach />

      {/* CASE STUDIES */}
      <CaseStudies />

      {/* TRAINING COURSES */}
      <section className="scroll-mt-28" id="courses">
        <Courses />
      </section>

      {/* BLOG INSIGHTS */}
      <BlogPreview />
    </main>
  );
}