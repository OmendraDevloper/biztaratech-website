import { Icon } from "@iconify/react";
import Image from "next/image";

interface WebinarRegistrationProps {
    onClose: () => void;
}

const WebinarRegistration = ({ onClose }: WebinarRegistrationProps) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-xl w-full mx-4 relative">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <Icon icon="mdi:close" className="text-2xl" />
                </button>

                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-midnight_text mb-2">Free Enterprise Integration Webinar</h2>
                    <p className="text-gray-600">Join our upcoming webinar to learn about enterprise integration best practices</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input 
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Your full name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Your work email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <input 
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Your company name"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        Register for Webinar
                    </button>
                </form>

                <div className="mt-6 flex items-center gap-4 justify-center text-sm text-gray-600">
                    <Icon icon="mdi:calendar" className="text-xl text-primary" />
                    <span>Next Session: June 1, 2025</span>
                    <Icon icon="mdi:clock" className="text-xl text-primary" />
                    <span>2:00 PM EST</span>
                </div>
            </div>
        </div>
    );
};

export default WebinarRegistration;
