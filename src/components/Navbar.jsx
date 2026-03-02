import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLink = "block text-base font-semibold text-black py-2";

  return (
    <nav className="w-full bg-[#f8f6f2] shadow-md fixed top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="block leading-none"
        >
          <div className="h-12 md:h-14 overflow-hidden">
            <img
              src="/logo1234.png"
              alt="WhiteMarble Production Logo"
              className="h-full w-auto scale-150 object-contain"
            />
          </div>
        </Link>

        
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/new-movie"
            className="text-sm font-semibold hover:underline"
          >
            Capabilities
          </Link>
          <Link to="/about" className="text-sm font-semibold hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-sm font-semibold hover:underline">
            Contact
          </Link>

          <Link to="/login">
            <button className="px-5 py-2 text-sm border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
              Login / Register
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f8f6f2] w-full px-6 pb-6 pt-2 space-y-4 shadow-lg">
          <Link
            to="/new-movie"
            className={navLink}
            onClick={() => setIsOpen(false)}
          >
            Capabilities
          </Link>

          <Link
            to="/about"
            className={navLink}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={navLink}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="w-full mt-2 px-5 py-2 text-sm border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
              Login / Register
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
