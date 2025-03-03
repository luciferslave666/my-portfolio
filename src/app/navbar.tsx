"use client"; // Jika menggunakan App Router (Next.js 13+)

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="https://www.instagram.com/snddwptraaa" className="text-2xl font-bold">
          Sendi Dwi Putra
        </Link>

        {/* Button untuk Mobile */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-transform ${isOpen ? "translate-y-0" : "-translate-y-96"} md:translate-y-0`}>
          <li>
            <Link href="#about" className="block px-4 py-2 md:inline hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link href="#projects" className="block px-4 py-2 md:inline hover:text-gray-400">Projects</Link>
          </li>
          <li>
            <Link href="#contact" className="block px-4 py-2 md:inline hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
