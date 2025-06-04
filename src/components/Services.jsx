import React from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const iconStyle = "text-backgroundColor dark:text-white";
  const icon1 = <RiMicroscopeLine size={35} className={iconStyle} />;
  const icon2 = <MdHealthAndSafety size={35} className={iconStyle} />;
  const icon3 = <FaHeartbeat size={35} className={iconStyle} />;

  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center px-5 lg:px-32 pt-24 lg:pt-16 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      {/* Header */}
      <div className="flex flex-col items-center lg:flex-row justify-between gap-6">
        <div>
          <h2 className="text-4xl font-semibold text-center lg:text-start text-gray-900 dark:text-white">
            Comprehensive Healthcare Services
          </h2>
          <p className="mt-2 text-center lg:text-start text-gray-600 dark:text-gray-400 max-w-xl">
            We offer a wide range of modern medical services to ensure your complete well-being —
            from preventive care to advanced diagnostics.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard
          icon={icon1}
          title="Advanced Lab Testing"
          description="State-of-the-art laboratory diagnostics that provide fast, accurate results to support timely treatments."
        />
        <ServicesCard
          icon={icon2}
          title="Complete Health Checkups"
          description="Comprehensive health assessments tailored for early detection and personalized health planning."
        />
        <ServicesCard
          icon={icon3}
          title="Cardiology Care"
          description="Expert heart care and regular screenings to prevent, monitor, and manage cardiovascular conditions."
        />
      </div>
    </section>
  );
};

export default Services;
