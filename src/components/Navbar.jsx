import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLink =
    "relative text-sm font-semibold text-black after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="w-full bg-[#f8f6f2] shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-widest text-black">
          <img
            src="/logo1234.png"
            alt="WhiteMarble Production Logo"
            className="h-10 md:h-12"
          />
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link to="/new-movie" className={navLink}>
            Capabilities
          </Link>
          <Link to="/about" className={navLink}>
            About
          </Link>
          <Link to="/contact" className={navLink}>
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <Link to="/login">
            <button className="px-5 py-2 text-sm border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
              Login / Register
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#f8f6f2] px-6 pb-6 pt-4 space-y-4 text-center font-medium shadow-lg">
          <Link to="/new-movie" className={navLink}>
            Capabilities
          </Link>
          <Link to="/about" className={navLink}>
            About
          </Link>
          <Link to="/contact" className={navLink}>
            Contact
          </Link>

          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="mt-3 px-5 py-2 text-sm border border-black rounded-full hover:bg-black hover:text-white transition duration-300 w-full">
              Login / Register
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
