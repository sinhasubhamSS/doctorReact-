import React from "react";
import img from "../assets/img/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5 bg-white dark:bg-gray-900"
    >
      <motion.div
        className="w-full lg:w-3/4 space-y-4 text-gray-800 dark:text-gray-200 bg-gray-slate-200 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className="text-justify lg:text-start">
          We are a team of passionate healthcare professionals dedicated to
          delivering exceptional medical care with compassion and integrity. At
          our core, we believe that every patient deserves personalized
          attention, cutting-edge treatment, and a supportive environment to
          heal and thrive.
        </p>
        <p className="text-justify lg:text-start">
          Our clinic combines years of experience with modern technology to
          offer a comprehensive range of medical services. Whether it's routine
          checkups, specialized consultations, or long-term care, our
          commitment to excellence ensures you receive the best treatment at
          every stage.
        </p>
        <p className="text-justify lg:text-start">
          We strive to build lasting relationships based on trust and
          transparency. With a patient-first approach, our goal is to empower
          individuals and families to make informed decisions about their health
          and well-being.
        </p>
      </motion.div>

      <motion.div
        className="w-full lg:w-3/4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <img className="rounded-lg" src={img} alt="Our medical team" />
      </motion.div>
    </div>
  );
};

export default About;
