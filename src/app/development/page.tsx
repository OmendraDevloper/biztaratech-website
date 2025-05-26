"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const devData = [
	{
		title: "MuleSoft Development & Management",
		img: "/images/companies/mule.png",
		alt: "MuleSoft",
		desc: `Biztara has empowered leading enterprises with robust MuleSoft integration solutions for over 5 years. We architect API-led connectivity, deliver scalable architectures, and ensure seamless system integrations. Our project management approach guarantees on-time, on-budget delivery with a relentless focus on innovation and client satisfaction.`,
		highlights: [
			"API-led connectivity & integration",
			"Enterprise-grade architecture",
			"Certified MuleSoft experts",
			"Agile project management",
			"Proven results across industries",
		],
		caseImage: "/images/banner/WebBanner1.png",
	},
	{
		title: "Dell Boomi Development & Management",
		img: "/images/companies/boomi.png",
		alt: "Dell Boomi",
		desc: `Our Dell Boomi team delivers cloud integration and automation at scale. For 5+ years, Biztara has connected SaaS, on-premise, and cloud applications for clients worldwide. We focus on reliability, security, and business process optimization, ensuring every project delivers real ROI and operational excellence.`,
		highlights: [
			"Cloud & hybrid integration",
			"Process automation",
			"Certified Boomi professionals",
			"End-to-end project delivery",
			"Industry-specific solutions",
		],
		caseImage: "/images/banner/WebBanner2.png",
	},
	{
		title: "MERN Stack Development & Management",
		img: "/images/companies/mern.png",
		alt: "MERN Stack",
		desc: `Biztara builds modern, scalable web applications using the MERN stack (MongoDB, Express, React, Node.js). Our company delivers high-performance, user-centric solutions for businesses of all sizes. With a focus on rapid delivery and transparent management, we help you achieve your digital goals faster and smarter.`,
		highlights: [
			"Full-stack web app development",
			"Modern UI/UX with React",
			"RESTful APIs & microservices",
			"Agile & transparent management",
			"Rapid prototyping & delivery",
		],
		caseImage: "/images/banner/WebBanner4.png",
	},
];

export default function DevelopmentPage() {

	return (
		<section className="min-h-[80vh] py-16 pt-32 bg-gradient-to-br from-white to-blue-50">
			<div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
				{/* Hero Section with Enhanced Visual */}
				<div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
					<div className="lg:w-1/2">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-midnight_text mb-6 drop-shadow-sm leading-tight">
							Why Partner With <span className="text-primary">Biztara</span> for Digital Transformation?
						</h1>
						<p className="text-base md:text-lg text-gray-800 mb-8">
							🚀{" "}
							<span className="font-semibold text-primary">Why choose Biztara?</span> We
							are a trusted technology partner for enterprises seeking innovation,
							reliability, and growth. For over 5 years, our company has delivered
							impactful solutions in MuleSoft, Dell Boomi, and MERN, helping
							organizations modernize, integrate, and scale with confidence.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-primary/90 transition">
								Start Your Project
							</Link>
							<Link href="/courses" className="inline-block border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary/10 transition">
								Explore Our Solutions
							</Link>
						</div>
					</div>
					<div className="lg:w-1/2">
						<div className="relative h-[350px] w-full">
							<Image 
								src="/images/banner/WebBanner.png" 
								alt="Digital Transformation" 
								fill 
								className="object-contain" 
							/>
						</div>
					</div>
				</div>

				{/* Our Process Section - Enhanced */}
				<div className="flex flex-col items-center mb-24 bg-white rounded-3xl shadow-xl p-8">
					<h2 className="text-2xl md:text-3xl font-bold text-midnight_text mb-8 text-center">
						Our Proven Process
					</h2>
					<ol className="relative border-l-4 border-primary/30 max-w-3xl mx-auto">
						<li className="mb-10 ml-6">
							<span className="absolute flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5 ring-4 ring-white text-white font-bold">
								1
							</span>
							<h3 className="font-semibold text-xl text-primary">
								Discovery & Consultation
							</h3>
							<p className="text-gray-600 mt-2">
								We listen, understand your business challenges, and identify the best solution
								for your unique needs. Our consultative approach ensures alignment with your strategic goals.
							</p>
						</li>
						<li className="mb-10 ml-6">
							<span className="absolute flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5 ring-4 ring-white text-white font-bold">
								2
							</span>
							<h3 className="font-semibold text-xl text-primary">
								Solution Design
							</h3>
							<p className="text-gray-600 mt-2">
								Our experts architect scalable, future-proof solutions tailored to
								your goals. We create detailed blueprints that maximize ROI while minimizing technical debt.
							</p>
						</li>
						<li className="mb-10 ml-6">
							<span className="absolute flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5 ring-4 ring-white text-white font-bold">
								3
							</span>
							<h3 className="font-semibold text-xl text-primary">
								Agile Development
							</h3>
							<p className="text-gray-600 mt-2">
								We build, iterate, and keep you in the loop—delivering value at
								every step. Our transparent approach ensures you always know where your project stands.
							</p>
						</li>
						<li className="ml-6">
							<span className="absolute flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5 ring-4 ring-white text-white font-bold">
								4
							</span>
							<h3 className="font-semibold text-xl text-primary">
								Seamless Delivery & Support
							</h3>
							<p className="text-gray-600 mt-2">
								Go live with confidence! We support you post-launch with comprehensive training, documentation, 
								and ongoing maintenance to ensure long-term success.
							</p>
						</li>
					</ol>
				</div>

				{/* Services Section - Enhanced */}
				<div className="mb-24">
					<h2 className="text-2xl md:text-3xl font-bold text-center text-midnight_text mb-12">
						Our <span className="text-primary">Expertise</span> & Services
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{devData.map((item, idx) => (
							<div
								key={idx}
								className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
							>
								<div className="p-8">
									<div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-tr from-primary/10 to-primary/30 rounded-full">
										<Image
											src={item.img}
											alt={item.alt}
											width={60}
											height={60}
											className="object-contain"
										/>
									</div>
									<h3 className="text-xl font-bold text-midnight_text mb-4">
										{item.title}
									</h3>
									<p className="text-gray-700 mb-6 line-clamp-3">
										{item.desc}
									</p>
									<ul className="space-y-2 mb-6">
										{item.highlights.map((h, i) => (
											<li key={i} className="flex items-start">
												<span className="text-primary mr-2 mt-1">✓</span>
												<span>{h}</span>
											</li>
										))}
									</ul>
								</div>
								<div className="relative w-full h-48">
									<Image 
										src={item.caseImage}
										alt={`${item.alt} Case Study`}
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
										<div className="p-4 text-white">
											<p className="font-medium">Success Stories</p>
											<p className="text-sm opacity-80">View case studies →</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>				</div>

				{/* Enhanced CTA Section */}
				<div className="rounded-3xl bg-gradient-to-r from-primary to-blue-700 text-white shadow-xl p-10 text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-6">
						Ready to Transform Your Business?
					</h2>
					<p className="text-lg mb-8 max-w-2xl mx-auto">
						Let's have a quick, no-obligation call. Whether you need integration,
						automation, or a modern web app, our experts are eager to help you
						succeed and accelerate your digital transformation journey.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link
							href="/contact"
							className="inline-block bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition"
						>
							Contact Us Today
						</Link>
						<a
							href="mailto:connect@biztara.com"
							className="inline-block border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition"
						>
							Email Us Directly
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
