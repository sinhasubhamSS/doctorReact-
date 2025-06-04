import React from "react";

const BlogCard = ({ img, headlines, description }) => {
  return (
    <div className="w-full lg:w-1/4 p-3 rounded-lg cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out
      bg-white shadow-md dark:bg-gray-900 dark:shadow-[0_0_10px_1px_rgba(255,255,255,0.1)] border dark:border-white/10">

      {/* Blog Image */}
      <img
        src={img}
        alt={headlines}
        className="h-64 md:h-96 lg:h-40 w-full object-cover rounded-lg"
      />

      {/* Headline */}
      <h2 className="text-lg font-semibold text-center text-gray-800 dark:text-white mt-2">
        {headlines}
      </h2>

      {/* Description */}
      <p className="text-sm text-center text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default BlogCard;
 