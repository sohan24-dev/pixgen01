import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://pixgen-eta.vercel.app/data.json');
    const photos = await res.json();

    const item = photos.find(p => p.id == id);

    if (!item) {
        return <p className="text-center mt-10 text-red-500">Item not found</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">

            <div className="bg-white shadow-xl rounded-2xl overflow-hidden 
                            grid grid-cols-1 lg:grid-cols-2">

                {/* Image Section */}
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full">
                    <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-between">

                    <div className="space-y-4">

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                            {item.title}
                        </h1>

                        {/* Category + Model */}
                        <div className="flex flex-wrap gap-2 text-sm">
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                                {item.category}
                            </span>
                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                                {item.model}
                            </span>
                        </div>

                        {/* Prompt */}
                        <div>
                            <h2 className="font-semibold text-gray-700 mb-1">
                                Prompt
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                {item.prompt}
                            </p>
                        </div>

                        {/* Resolution + Date */}
                        <div className="flex flex-col sm:flex-row sm:justify-between 
                                        gap-2 text-sm text-gray-500">
                            <span>Resolution: {item.resolution}</span>
                            <span>
                                Created: {new Date(item.createdAt).toLocaleDateString()}
                            </span>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-6 text-gray-700 font-medium text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                                <p><FaHeart /></p>
                                <p>{item.likes}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p><BiDownload /></p>
                                <p>{item.downloads}</p>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 text-gray-600 px-3 py-1 text-xs sm:text-sm rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6">
                        <button className="w-full sm:w-auto bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                            Download
                        </button>
                        <button className="w-full sm:w-auto border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100 transition">
                            Like
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PhotoDetailsPage;