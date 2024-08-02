import React, { useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set duration for animations
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0" data-aos="fade-up">
          <h1 className="text-2xl font-bold mb-2">
            My<span className="text-indigo-500">Portfolio</span>
          </h1>
          <p className="text-gray-400">
            Welcome to MyPortfolio.
            <br />
            Portfolio ini dibuat untuk tugas Project dan contact.
          </p>
        </div>

        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul>
            <li>
              <ScrollLink to="About" smooth duration={1900}>
                <button className="text-gray-400 hover:text-white">
                  About
                </button>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Projects" smooth duration={1900}>
                <button className="text-gray-400 hover:text-white">
                  Projects
                </button>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth duration={1900}>
                <button className="text-gray-400 hover:text-white">
                  Contact
                </button>
              </ScrollLink>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 px-4" data-aos="fade-up" data-aos-delay="600">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-400">Email: ffirmansetiawan@gmail.com</p>
          <p className="text-gray-400">Phone: +62 85959903083</p>
        </div>
      </div>

      <div className="text-center mt-8"  data-aos-delay="900">
        &copy; 2024 MyPortfolio | Pelajar SMK PK Cibitung 1
      </div>
    </footer>
  );
}
