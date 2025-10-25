import React from "react";
import { CalendarDays, MessageSquare } from "lucide-react";

const BlogCard = () => {
    return (
        <>
            <div className="px-20 blog grid grid-cols-3 gap-0">
                {/* Blog 1 */}
                <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {/* Blog Image */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
                            alt="Kindergarten"
                            className="w-full h-56 object-cover"
                        />
                        <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            Education
                        </span>
                    </div>

                    {/* Blog Content */}
                    <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm gap-4 mb-2">
                            <span className="flex items-center gap-1">
                                👤 Dynamiclayers
                            </span>
                            <span className="flex items-center gap-1">
                                <CalendarDays className="w-4 h-4" /> Aug 13, 2024
                            </span>
                        </div>

                        <h2 className="text-lg font-semibold text-gray-900 leading-snug hover:text-orange-600 cursor-pointer">
                            Discovering the Joys of Child Kindergarten School
                        </h2>

                        <p className="text-gray-600 text-sm mt-3">
                            The digital landscape is vast and changing, presenting for businesses.
                            From social media platforms to search engine...
                        </p>

                        {/* Footer */}
                        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100 text-sm">
                            <button className="flex items-center gap-1 text-orange-600 hover:underline font-medium">
                                Read More →
                            </button>
                            
                        </div>
                    </div>
                </div>
                {/* Blog-2 */}
                <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {/* Blog Image */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
                            alt="Kindergarten"
                            className="w-full h-56 object-cover"
                        />
                        <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            Education
                        </span>
                    </div>

                    {/* Blog Content */}
                    <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm gap-4 mb-2">
                            <span className="flex items-center gap-1">
                                👤 Dynamiclayers
                            </span>
                            <span className="flex items-center gap-1">
                                <CalendarDays className="w-4 h-4" /> Aug 13, 2024
                            </span>
                        </div>

                        <h2 className="text-lg font-semibold text-gray-900 leading-snug hover:text-orange-600 cursor-pointer">
                            Discovering the Joys of Child Kindergarten School
                        </h2>

                        <p className="text-gray-600 text-sm mt-3">
                            The digital landscape is vast and changing, presenting for businesses.
                            From social media platforms to search engine...
                        </p>

                        {/* Footer */}
                        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100 text-sm">
                            <button className="flex items-center gap-1 text-orange-600 hover:underline font-medium">
                                Read More →
                            </button>
                            
                        </div>
                    </div>
                </div>
                {/* Blog 3 */}
                <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {/* Blog Image */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
                            alt="Kindergarten"
                            className="w-full h-56 object-cover"
                        />
                        <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            Education
                        </span>
                    </div>

                    {/* Blog Content */}
                    <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm gap-4 mb-2">
                            <span className="flex items-center gap-1">
                                👤 Dynamiclayers
                            </span>
                            <span className="flex items-center gap-1">
                                <CalendarDays className="w-4 h-4" /> Aug 13, 2024
                            </span>
                        </div>

                        <h2 className="text-lg font-semibold text-gray-900 leading-snug hover:text-orange-600 cursor-pointer">
                            Discovering the Joys of Child Kindergarten School
                        </h2>

                        <p className="text-gray-600 text-sm mt-3">
                            The digital landscape is vast and changing, presenting for businesses.
                            From social media platforms to search engine...
                        </p>

                        {/* Footer */}
                        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100 text-sm">
                            <button className="flex items-center gap-1 text-orange-600 hover:underline font-medium">
                                Read More →
                            </button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default BlogCard;
