import React from "react";

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-3 w-full lg:w-1/3 p-5 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-3">

      {/* Icon */}
      <div className="bg-[#d5f2ec] dark:bg-gray-800 p-3 rounded-full transition-colors duration-300 group-hover:bg-[#ade9dc] dark:group-hover:bg-gray-700">
        {icon}
      </div>

      {/* Title */}
      <h2 className="font-semibold text-lg text-gray-800 dark:text-white">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>

      {/* Learn More */}
      <span className="text-backgroundColor dark:text-teal-400 font-medium hover:text-[#ade9dc] dark:hover:text-teal-300 transition duration-300">
        Learn more
      </span>
    </div>
  );
};

export default ServicesCard;
