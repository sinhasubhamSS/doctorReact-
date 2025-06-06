import React from "react";
import { motion } from "framer-motion";

const BlogCard = ({ img, headlines, description, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.15, // delay based on index
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{
        y: -8,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
        border: "1px solid rgba(99, 102, 241, 0.5)", // Indigo border
        transition: { type: "tween", duration: 0.2 },
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 rounded-lg cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out
      bg-white shadow-md dark:bg-gray-900 dark:shadow-[0_0_10px_1px_rgba(255,255,255,0.1)] border dark:border-white/10"
    >
      <img
        src={img}
        alt={headlines}
        className="block h-64 md:h-80 lg:h-40 w-full object-cover bg-gray-100 rounded-lg"
      />
      <h2 className="text-lg font-semibold text-center text-gray-800 dark:text-white mt-2">
        {headlines}
      </h2>
      <p className="text-sm text-center text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};

export default BlogCard;
