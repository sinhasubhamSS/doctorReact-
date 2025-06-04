import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const backgroundImages = [
  "https://images.unsplash.com/photo-1588776814546-d97f9bda73cd?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1920&q=80",
];

const Home = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div id="home"className="relative min-h-screen text-white overflow-hidden">
      {/* Custom nav buttons */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 z-20 p-3 bg-blue-600 bg-opacity-50 rounded-full hover:bg-opacity-80 transform -translate-y-1/2 text-white"
      >
        &#10094;
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 z-20 p-3 bg-blue-600 bg-opacity-50 rounded-full hover:bg-opacity-80 transform -translate-y-1/2 text-white"
      >
        &#10095;
      </button>

      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="absolute inset-0 z-0"
      >
        {backgroundImages.map((url, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${url})` }}
            >
              <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Your content here */}
      <div className="relative z-10 flex flex-col justify-center items-start min-h-screen px-5 lg:px-32">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight max-w-4xl">
          Exceptional Medical Expertise, Compassionate Human Touch
        </h1>
        <p className="mt-6 max-w-3xl text-lg sm:text-xl text-gray-200">
          Your health is our highest priority. With a team of trusted specialists and state-of-the-art care, we’re here to guide you toward a healthier, happier life.
        </p>
      </div>

    </div>
  );
};

export default Home;
