import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div
      id="blog"
      className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 bg-white dark:bg-gray-900"
    >
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start text-gray-800 dark:text-gray-100">
            Latest Insights & Health Tips
          </h1>
          <p className="mt-2 text-center lg:text-start text-gray-600 dark:text-gray-300">
            Stay informed with our expert-written articles designed to support
            your health journey and lifestyle goals.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="View All Articles" />
        </div>
      </div>

      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard
            img={img1}
            headlines="Unraveling the Mysteries of Sleep"
            description="Discover why quality sleep is vital for overall health, immunity, and mental clarity."
          />
          <BlogCard
            img={img2}
            headlines="The Heart-Healthy Diet"
            description="Explore nutrient-rich foods that support cardiovascular health and lower disease risk."
          />
          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations"
            description="Learn how vaccines protect children from life-threatening diseases and promote long-term health."
          />
          <BlogCard
            img={img4}
            headlines="Navigating Mental Health"
            description="A guide to managing stress, anxiety, and emotional well-being in today's fast-paced world."
          />
          <BlogCard
            img={img5}
            headlines="The Importance of Regular Exercise"
            description="From mood to metabolism, discover how movement transforms both body and mind."
          />
          <BlogCard
            img={img6}
            headlines="Skin Health 101"
            description="Tips for maintaining healthy, radiant skin through proper care and hydration."
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
