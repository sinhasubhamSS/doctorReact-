import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import Contact from "../models/Contact";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "doctors", label: "Doctors" },
  { id: "blog", label: "Blog" },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => setMenu((prev) => !prev);
  const closeMenu = () => setMenu(false);
  const openForm = () => {
    setShowForm(true);
    closeMenu();
  };
  const closeForm = () => setShowForm(false);

  return (
    <div className="fixed w-full z-50 text-white bg-backgroundColor shadow-md dark:bg-gray-900">
      <div className="flex justify-between items-center py-5 px-5 md:px-32">
        {/* Logo */}
        <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
          <h1 className="text-2xl font-semibold">DoctorDoom</h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-hoverColor transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Contact Button */}
          <button
            onClick={openForm}
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300"
          >
            Contact Us
          </button>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="text-xl">
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="lg:hidden">
          {menu ? (
            <AiOutlineClose size={28} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <AiOutlineMenu size={28} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute w-full bg-backgroundColor dark:bg-gray-900 text-white top-16 left-0 text-center text-xl font-semibold transition-transform duration-300 ${menu ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-8 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-hoverColor transition-all"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={openForm}
            className="bg-brightColor px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300"
          >
            Contact Us
          </button>

          {/* Mobile Theme Toggle */}
          <button onClick={toggleDarkMode} className="text-xl mx-auto">
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>
        </div>
      </div>

      {/* Contact Form */}
      {showForm && <Contact closeForm={closeForm} />}
    </div>
  );
};

export default Navbar;
