import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const data = [
    { img: "/src/assets/img/doc1.jpg", name: "Dr. Serena Mitchell", specialties: "Orthopedic Surgeon" },
    { img: "/src/assets/img/doc2.jpg", name: "Dr. Julian Bennett", specialties: "Cardiologist" },
    { img: "/src/assets/img/doc3.jpg", name: "Dr. Camila Rodriguez", specialties: "Pediatrician" },
    { img: "/src/assets/img/doc4.jpg", name: "Dr. Victor Nguyen", specialties: "Neurologist" },
    { img: "/src/assets/img/doc5.jpg", name: "Dr. Ethan Carter", specialties: "Dermatologist" },
    { img: "/src/assets/img/doc6.jpg", name: "Dr. Olivia Martinez", specialties: "Ophthalmologist" },
  ];

  return (
    <div
      id="doctors"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-32 pt-16 bg-white dark:bg-gray-900"
    >
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-center lg:text-start text-gray-800 dark:text-gray-100">
            Our Doctors
          </h1>
          <p className="mt-2 text-center lg:text-start text-gray-600 dark:text-gray-300">
            Meet our team of certified, experienced specialists.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: "#doctors-swiper-next",
            prevEl: "#doctors-swiper-prev",
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {data.map((doc, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-3 cursor-pointer">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                    {doc.specialties}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute right-0 -bottom-10 flex gap-4 mt-6">
          <button
            id="doctors-swiper-prev"
            className="p-2 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 rounded-full hover:bg-teal-200 dark:hover:bg-teal-800"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            id="doctors-swiper-next"
            className="p-2 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 rounded-full hover:bg-teal-200 dark:hover:bg-teal-800"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
