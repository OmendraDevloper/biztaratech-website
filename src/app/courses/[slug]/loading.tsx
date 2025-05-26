export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="animate-pulse">
                    {/* Title */}
                    <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
                    
                    {/* Overview */}
                    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {[1, 2].map((i) => (
                            <div key={i} className="bg-white rounded-xl shadow-md p-6">
                                <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                                <div className="space-y-2">
                                    {[1, 2, 3].map((j) => (
                                        <div key={j} className="flex items-center gap-2">
                                            <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modules */}
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-xl shadow-md p-6">
                                <div className="h-6 bg-gray-200 rounded w-2/3 mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
                                <div className="space-y-2">
                                    {[1, 2, 3, 4].map((j) => (
                                        <div key={j} className="h-4 bg-gray-200 rounded w-full"></div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
