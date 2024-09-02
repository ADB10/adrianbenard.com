// src/components/Navbar.tsx
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(prevState => !prevState);

  return (
    <nav className="bg-main-shade-50 text-main-shade-800 sticky top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="font-bold">
          <a href="/">adrianbenard.com</a>
        </div>
        <button
          className="block lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="inline-block">☰</span> {/* Hamburger icon */}
        </button>
        <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-16 left-0 right-0 bg-main-shade-50 lg:bg-transparent lg:flex lg:space-x-6 lg:top-auto lg:left-auto lg:right-auto`}>
          <a
            href="#home"
            className="block px-4 py-2 lg:inline-block lg:px-2 lg:py-1 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 lg:inline-block lg:px-2 lg:py-1 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="block px-4 py-2 lg:inline-block lg:px-2 lg:py-1 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 lg:inline-block lg:px-2 lg:py-1 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
