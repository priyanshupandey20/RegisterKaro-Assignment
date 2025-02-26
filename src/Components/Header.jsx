import { useState } from "react";
import { FaPhone, FaEnvelope, FaSearch, FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="fixed left-0 top-0 w-full z-50 bg-white shadow-lg">
      {/* Top Bar - Hidden when screen is 1040px or smaller */}
      <div className="hidden lg:flex bg-blue-900 text-white px-6 md:px-10 py-2 justify-between items-center text-sm">
        <div className="flex items-center space-x-3">
          <FaEnvelope />
          <span className="hidden sm:inline">www.registerkaro.in</span>
          <FaPhone />
          <span>+918447746183</span>
        </div>
        <div className="flex space-x-3">
          <Link to="#"><FaFacebook className="hover:text-gray-300" /></Link>
          <Link to="#"><FaInstagram className="hover:text-gray-300" /></Link>
          <Link to="#"><FaTwitter className="hover:text-gray-300" /></Link>
          <Link to="#"><FaPinterest className="hover:text-gray-300" /></Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md py-3">
        <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-bold text-blue-900">
            <img src={logo} alt="Register Karo Logo" className="h-10 mr-2" />
            <span>Register</span>
            <span className="text-orange-500">Karo</span>
          </Link>

          {/* Desktop Menu - Hidden when screen size is 1040px or smaller */}
          <ul className="hidden lg:flex space-x-6 text-lg items-center font-medium">
            <li><Link to="/" className="hover:text-blue-900">Home</Link></li>

            {/* Dropdown for Our Services on Hover */}
            <li className="relative group">
              <button className="hover:text-blue-900 flex items-center">
                Our Services ▾
              </button>
              <ul className="absolute left-0 top-full w-48 bg-white shadow-md border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                <li><Link to="/services/service1" className="block px-4 py-2 hover:bg-gray-100">Service 1</Link></li>
                <li><Link to="/services/service2" className="block px-4 py-2 hover:bg-gray-100">Service 2</Link></li>
              </ul>
            </li>

            <li><Link to="/blog" className="hover:text-blue-900">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-blue-900">Contact Us</Link></li>
            <li><Link to="/about" className="hover:text-blue-900">About Us</Link></li>
            <li><FaSearch className="cursor-pointer hover:text-blue-900" /></li>
            <li>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-all">
                Talk About
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button - Shown when screen size is 1040px or smaller */}
          <button className="lg:hidden z-50" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Background Overlay */}
      {navOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/40 z-40"
          onClick={() => setNavOpen(false)}
        ></div>
      )}

      {/* Mobile Menu - Shown when screen size is 1040px or smaller */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg z-50 transform ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <div className="p-6 space-y-4 text-lg">
          {/* Close Button Inside Menu */}
          <button className="absolute top-4 right-4" onClick={() => setNavOpen(false)}>
            <AiOutlineClose size={24} />
          </button>
          <Link to="/" className="block hover:text-blue-900" onClick={() => setNavOpen(false)}>Home</Link>

          {/* Mobile Dropdown (Click-based for mobile) */}
          <div className="relative">
            <Link to="/services" className="block hover:text-blue-900">Our Services</Link>
            <ul className="ml-4 mt-1 space-y-2">
              <li><Link to="/services/service1" className="block hover:text-blue-900" onClick={() => setNavOpen(false)}>Service 1</Link></li>
              <li><Link to="/services/service2" className="block hover:text-blue-900" onClick={() => setNavOpen(false)}>Service 2</Link></li>
            </ul>
          </div>

          <Link to="/blog" className="block hover:text-blue-900" onClick={() => setNavOpen(false)}>Blog</Link>
          <Link to="/contact" className="block hover:text-blue-900" onClick={() => setNavOpen(false)}>Contact Us</Link>
          <Link to="/about" className="block hover:text-blue-900" onClick={() => setNavOpen(false)}>About Us</Link>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md w-full hover:bg-orange-600 transition-all">
            Talk About
          </button>
        </div>
      </div>
    </div>
  );
}
