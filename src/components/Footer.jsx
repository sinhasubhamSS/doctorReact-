import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-backgroundColor text-white dark:bg-gray-900 dark:text-gray-200 rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between px-5 sm:px-10 md:px-20 lg:px-32 py-10 gap-10">

        {/* Brand Info */}
        <section className="w-full md:w-1/4" aria-labelledby="footer-brand">
          <h1 id="footer-brand" className="font-semibold text-xl pb-4">DoctorDoom</h1>
          <p className="text-sm text-gray-200 dark:text-gray-400">
            Our team of dedicated doctors, each specializing in unique fields such as orthopedics, cardiology, pediatrics, neurology, dermatology, and more.
          </p>
        </section>

        {/* About Us */}
        <section aria-labelledby="footer-about">
          <h1 id="footer-about" className="font-medium text-xl pb-4">About Us</h1>
          <nav className="flex flex-col gap-2">
            <Link to="about" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer transition-all">
              About
            </Link>
            <Link to="services" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer transition-all">
              Services
            </Link>
            <Link to="doctors" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer transition-all">
              Doctors
            </Link>
          </nav>
        </section>

        {/* Services */}
        <section aria-labelledby="footer-services">
          <h1 id="footer-services" className="font-medium text-xl pb-4">Services</h1>
          <nav className="flex flex-col gap-2">
            <Link to="services" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer transition-all">
              Lab Test
            </Link>
            <Link to="services" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer transition-all">
              Health Check
            </Link>
            <Link to="services" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer transition-all">
              Heart Health
            </Link>
          </nav>
        </section>

        {/* Contact Info */}
        <section className="w-full md:w-1/4" aria-labelledby="footer-contact">
          <h1 id="footer-contact" className="font-medium text-xl pb-4">Contact Us</h1>
          <nav className="flex flex-col gap-2 text-sm">
            <span>Greater Noida Sector 65</span>
            <a href="mailto:contact@care.com" className="hover:text-hoverColor transition-colors">contact@care.com</a>
            <a href="tel:+9874563210" className="hover:text-hoverColor transition-colors">+9874563210</a>
          </nav>
        </section>

      </div>
    </footer>
  );
};

export default Footer;
