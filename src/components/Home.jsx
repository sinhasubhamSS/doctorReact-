import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const backgroundImages = [
  "https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyb3VwJTIwb2YlMjBkb2N0b3JzJTIwaGR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1920&q=80",
];

const Home = () => {
  return (
    <div id="home" className="relative min-h-screen text-white overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          }
        }}
        grabCursor={true}
        allowTouchMove={true}
        className="absolute inset-0 z-0"
      >
        {backgroundImages.map((url, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${url})` }}
            >
              <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start min-h-screen px-5 lg:px-32 pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight max-w-4xl">
            Exceptional Medical Expertise, Compassionate Human Touch
          </h1>
          <p className="mt-6 max-w-3xl text-lg sm:text-xl text-gray-200">
            Your health is our highest priority. With a team of trusted specialists and state-of-the-art care, we're here to guide you toward a healthier, happier life.
          </p>
        </div>
      </div>

      {/* Custom cursor and pagination styles */}
      <style jsx global>{`
        .swiper {
          cursor: grab;
        }
        .swiper:active {
          cursor: grabbing;
        }
        .swiper-pagination {
          position: absolute;
          bottom: 20px !important;
          z-index: 20;
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5 !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 8px !important;
          transition: opacity 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Home;