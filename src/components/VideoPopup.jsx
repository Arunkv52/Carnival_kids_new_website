import React, { useState } from "react";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#f6f5ff] py-0 text-center relative">
      {/* Thumbnail or Static Embed Preview */}
      <div
        className="relative w-full max-w-full mx-auto cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        {/* Static thumbnail image */}
        <img
          src="https://img.youtube.com/vi/CpD2VtPNIaY/maxresdefault.jpg"
          alt="YouTube Video"
          className="w-full h-dvh object-cover"
        />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white text-[#7b68ee] rounded-full px-5 py-4 w-fit shadow-lg transition-transform transform group-hover:scale-130">
            ▶
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 md:px-5 px-10">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-white text-3xl font-bold hover:text-gray-300 z-50"
            >
              ×
            </button>

            {/* YouTube iframe */}
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/CpD2VtPNIaY?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
