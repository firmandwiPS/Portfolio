import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H15V8a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 12 9Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2.025 0H17m-9.975 4H6a1 1 0 0 0-1 1v2m12-3h1.025a1 1 0 0 1 1 1v2M16 11h1a1 1 0 0 0 1-1V8m-9.975 3H7a1 1 0 0 1-1-1V8"
            />
          </svg>

          <a href="/" className="text-white font-bold text-xl">
            Firman<span className="text-indigo-500">Dwi</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition">
            About
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition">
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <a onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a
            href="#about"
            className="block text-gray-300 hover:text-white transition">
            About
          </a>
          <a
            href="#projects"
            className="block text-gray-300 hover:text-white transition">
            Projects
          </a>
          <a
            href="#contact"
            className="block text-gray-300 hover:text-white transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
