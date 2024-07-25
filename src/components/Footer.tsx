import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h1 className="text-2xl font-bold mb-2">
            My<span className="text-indigo-500">Portfolio</span>
          </h1>
          <p className="text-gray-400">
            Welcome to MyPortfolio.
            <br />
            Portfolio ini dibuat untuk tugas Project dan contact.
          </p>
        </div>

        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul>
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-400 hover:text-white">
                Project
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-400">Email: ffirmansetiawan@gmail.com</p>
          <p className="text-gray-400">Phone: +62 85959903083</p>
        </div>
      </div>

      <div className="text-center mt-8">
        &copy; 2024 MyPortfolio | Pelajar SMK PK Cibitung 1
      </div>
    </footer>
  );
}
