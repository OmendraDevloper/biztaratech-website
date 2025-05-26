'use client';

import React, { useState, useEffect } from "react";
import type { Webinar } from "../../types/webinar";
import Image from 'next/image';

const WebinarRegistration = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const [submitted, setSubmitted] = useState(false);
  const [currentWebinar, setCurrentWebinar] = useState<Webinar | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWebinar = async () => {
      try {
        const response = await fetch('/api/webinars');
        const data = await response.json();
        if (data.success && data.webinars?.length > 0) {
          setCurrentWebinar(data.webinars[0]); // Get the first active webinar
        } else {
          setError("No webinars found");
        }
      } catch (err) {
        setError("Failed to load webinar data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWebinar();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentWebinar) {
      setError("No webinar selected");
      return;
    }

    try {
      const res = await fetch('/api/webinar-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          webinarId: currentWebinar._id,
          name: form.name,
          email: form.email,
          phone: form.mobile
        })
      });

      const data = await res.json();
      
      if (data.success) {
        setSubmitted(true);
        setError("");
      } else {
        setError(data.error || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  if (isLoading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (error && !submitted) {
    return <div className="p-8 text-center text-red-600">{error}</div>;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="bg-blue-50 rounded-xl p-8 shadow-md max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Webinar info */}
          <div className="flex-1 flex flex-col items-center">
            {currentWebinar?.imageUrl && (
              <div className="w-48 h-48 relative mb-4">
                <Image
                  src={currentWebinar.imageUrl}
                  alt={currentWebinar.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            )}
            <h2 className="text-xl font-semibold text-center mb-2">{currentWebinar?.title}</h2>
            <p className="text-center text-blue-900 text-sm mb-4">{currentWebinar?.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{new Date(currentWebinar?.datetime || "").toLocaleDateString()}</span>
              <span>{currentWebinar?.duration}</span>
            </div>
          </div>

          {/* Registration form */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-900">Free Webinar Registration</h3>
            {submitted ? (
              <div className="text-green-600 text-center p-4 bg-green-50 rounded-lg">
                <p className="font-semibold mb-2">Thank you for registering!</p>
                <p>We'll send you an email with the webinar details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10,15}"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Register Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarRegistration;
