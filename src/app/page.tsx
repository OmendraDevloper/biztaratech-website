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
      <Hero />

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