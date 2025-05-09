"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === "dark" ? (
                <RiSunLine size={20} />
              ) : (
                <RiMoonFill size={20} />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isMenuOpen ? (
              <IoCloseOutline size={24} />
            ) : (
              <IoMenuOutline size={24} />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsMenuOpen(false);
              }}
              className="w-full text-left py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
