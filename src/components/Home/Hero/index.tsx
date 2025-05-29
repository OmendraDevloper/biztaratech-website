import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from '@/utils/util';
import { useState, useEffect } from 'react';

interface HeroProps {
    title?: string;
    subtitle?: string;
    ctaTraining?: string;
    ctaDevelopment?: string;
}

const Hero: React.FC<HeroProps> = ({ 
    title = "Enterprise Integration Training & Custom Software Development", 
    subtitle = "By Industry Professionals with 18+ Years of Experience",
    ctaTraining = "Join Our Training Programs",
    ctaDevelopment = "Get Custom Software Solutions"
}) => {
    const [webinars, setWebinars] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [form, setForm] = useState({ name: '', email: '', phone: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Fetch all active webinars
        fetch('/api/webinars')
            .then(res => res.json())
            .then(data => {
                if (data.success && data.webinars?.length > 0) {
                    setWebinars(data.webinars);
                }
            })
            .catch(console.error);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const currentWebinar = webinars[currentIndex];
        if (!currentWebinar) return;
        
        setIsSubmitting(true);
        try {
            console.log('Submitting registration for webinar:', currentWebinar._id);
            const data = {
                name: form.name,
                email: form.email,
                phone: form.phone,
                webinarId: currentWebinar._id
            };
            console.log('Registration data:', data);
            
            const res = await fetch('/api/webinar-registration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const response = await res.json();
            console.log('Registration response:', response);
            
            if (res.ok) {
                setSubmitted(true);
                setForm({ name: '', email: '', phone: '' });
            } else {
                console.error('Registration failed:', response.error);
                alert('Registration failed: ' + (response.error || 'Please try again'));
            }
        } catch (err) {
            console.error('Failed to register:', err);
            alert('Registration failed. Please try again later.');
        }
        setIsSubmitting(false);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % webinars.length);
        setSubmitted(false); // Reset form state when changing webinars
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + webinars.length) % webinars.length);
        setSubmitted(false); // Reset form state when changing webinars
    };

    return (
        <section id="home-section" className='bg-slateGray'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center'>
                    <div className='col-span-6 flex flex-col gap-8'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Icon
                                icon="material-symbols:verified-outline"
                                className="text-primary text-xl inline-block me-2"
                            />
                            <p className='text-primary text-sm font-semibold text-center lg:text-start'>18+ Years Enterprise Integration Expertise</p>
                        </div>
                        <h1 className='text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0'>Enterprise Integration & Digital Training Solutions</h1>
                        <h3 className='text-black/70 text-lg pt-5 lg:pt-0'>Led by former Capgemini Technical Architect with proven expertise in MuleSoft, Dell Boomi, and MERN stack solutions.</h3>

                        <div className='grid grid-cols-2 gap-4 mt-8'>
                            <div className='bg-white/80 p-4 rounded-lg shadow-sm'>
                                <div className='flex items-center gap-3 mb-2'>
                                    <Icon icon="mdi:certificate" className="text-primary text-2xl" />
                                    <h4 className='font-semibold'>Certified Expert</h4>
                                </div>
                                <p className='text-sm text-gray-600'>MuleSoft, Dell Boomi, and Cloud certified professional</p>
                            </div>
                            <div className='bg-white/80 p-4 rounded-lg shadow-sm'>
                                <div className='flex items-center gap-3 mb-2'>
                                    <Icon icon="mdi:briefcase" className="text-primary text-2xl" />
                                    <h4 className='font-semibold'>Enterprise Background</h4>
                                </div>
                                <p className='text-sm text-gray-600'>Ex-Capgemini Technical Architect</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-8 pt-6'>
                            <div className='flex gap-2 items-center'>
                                <Icon icon="mdi:integrate" className="text-primary text-2xl" />
                                <div>
                                    <p className='text-2xl font-bold text-midnight_text'>500+</p>
                                    <p className='text-sm text-gray-600'>Integrations Delivered</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Icon icon="mdi:account-group" className="text-primary text-2xl" />
                                <div>
                                    <p className='text-2xl font-bold text-midnight_text'>50+</p>
                                    <p className='text-sm text-gray-600'>Enterprise Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-6'>
                        <div className='relative'>
                            {/* Navigation Arrows */}
                            {webinars.length > 1 && (
                                <>
                                    <button 
                                        onClick={prevSlide}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all"
                                        aria-label="Previous webinar"
                                    >
                                        <Icon icon="heroicons:chevron-left" className="w-6 h-6 text-primary" />
                                    </button>
                                    <button 
                                        onClick={nextSlide}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all"
                                        aria-label="Next webinar"
                                    >
                                        <Icon icon="heroicons:chevron-right" className="w-6 h-6 text-primary" />
                                    </button>
                                </>
                            )}

                            {/* Webinar Content */}
                            <div className='bg-white rounded-2xl shadow-xl p-6 transition-all duration-300'>
                                {webinars.length > 0 ? (
                                    <>
                                        <div className='text-center mb-4'>
                                            <h2 className='text-xl font-bold text-midnight_text mb-2'>{webinars[currentIndex].topic}</h2>
                                            <p className='text-gray-600 text-sm'>{webinars[currentIndex].description}</p>
                                            <div className="mt-3">
                                                <Image
                                                    src={webinars[currentIndex].image || '/images/banner/WebBanner.png'}
                                                    alt={webinars[currentIndex].topic}
                                                    width={320}
                                                    height={160}
                                                    className="rounded-lg mx-auto object-cover h-[160px]"
                                                    priority
                                                />
                                            </div>
                                        </div>
                                        {submitted ? (
                                            <div className='text-center py-6'>
                                                <Icon icon="mdi:check-circle" className="text-green-500 text-4xl mb-3 mx-auto" />
                                                <h3 className='text-lg font-semibold text-midnight_text mb-2'>Thank You for Registering!</h3>
                                                <p className='text-gray-600 text-sm'>We'll send you the webinar details shortly.</p>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className='space-y-3'>
                                                <div>
                                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={form.name}
                                                        onChange={handleChange}
                                                        className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                                                        placeholder='Your full name'
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                                                        placeholder='Your email address'
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                        className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                                                        placeholder='Your phone number'
                                                        required
                                                        pattern="[0-9]{10}"
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className='w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50'
                                                >
                                                    {isSubmitting ? 'Registering...' : 'Register for Webinar'}
                                                </button>
                                            </form>
                                        )}
                                        <div className='mt-6 flex items-center gap-4 justify-center text-sm text-gray-600'>
                                            <Icon icon="mdi:calendar" className="text-xl text-primary" />
                                            <span>Date: {new Date(webinars[currentIndex].date).toLocaleDateString()}</span>
                                            <Icon icon="mdi:clock" className="text-xl text-primary" />
                                            <span>Time: {webinars[currentIndex].time}</span>
                                        </div>
                                    </>
                                ) : (
                                    <div className='text-center py-8'>
                                        <h3 className='text-xl font-semibold text-midnight_text mb-2'>No Upcoming Webinars</h3>
                                        <p className='text-gray-600'>Please check back later for new webinar announcements.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
