"use client";
import React, { useState } from "react";
import { Holtwood_One_SC } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const holtwoodOneSC = Holtwood_One_SC({
  subsets: ["latin"],
  weight: "400",
});

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu items array
  const menuItems = [
    { href: "/", icon: "/images/home.png", label: "Home" },
    { href: "/about", icon: "/images/about.png", label: "About" },
    { href: "/blogs", icon: "/images/blog.png", label: "Blog" },
    { href: "/contact", icon: "/images/contact.png", label: "Contact" },
  ];

  return (
    <div
      className={`fixed top-0 right-0 left-0 px-4 py-4 z-50 shadow-lg shadow-zinc-900 flex justify-between 
        items-center bg-black ${holtwoodOneSC.className}`}
    >
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-white text-xl justify-around">PenAura</h2>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden text-white text-2xl relative z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`block w-8 h-1 bg-white mb-1 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`block w-8 h-1 bg-white mb-1 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`block w-8 h-1 bg-white transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>

        {/* Navigation Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-white shadow-2xl sm:static sm:w-auto sm:bg-transparent ${
            menuOpen ? "block" : "hidden"
          } sm:flex sm:justify-center sm:items-center sm:w-full`}
        >
          <ul className="flex flex-col sm:flex-row text-center items-center justify-center gap-4 p-2 sm:p-0">
            {menuItems.map((item) => (
              <li
                key={item.href}
                className="font-serif border text-center py-2 px-4 rounded-2xl text-[16px] w-30 bg-transparent text-white hover:text-zinc-400 hover:border-none hover:shadow-2xl hover:shadow-zinc-200 hover:transition-all duration-500 ease-in-out"
              >
                <Link
                  href={item.href}
                  className={menuOpen ? "text-black" : "text-white"}
                >
                  <span className="flex items-center">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={12}
                      height={12}
                      className={`mr-2 ${
                        menuOpen ? "brightness-0" : "brightness-100"
                      }`}
                    />
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
