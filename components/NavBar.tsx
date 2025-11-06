"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constants/NavBar"; // adjust relative path if needed
import Link from "next/link";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl font-extrabold tracking-wide uppercase">
          ChemSupply Co.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="hover:text-blue-200 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 px-6 py-4 space-y-3 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block hover:text-blue-200 transition"
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
