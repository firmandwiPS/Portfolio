import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Profile() {
  const [displayName, setDisplayName] = useState("");
  const fullName = "Fullstack Developer";
  const typingSpeed = 150;
  const pauseDuration = 2000;

  useEffect(() => {
    let currentIndex = 0;
    let typing = true;
    const interval = setInterval(() => {
      if (typing) {
        setDisplayName(fullName.slice(0, currentIndex));
        currentIndex++;
        if (currentIndex > fullName.length) {
          typing = false;
          setTimeout(() => {
            currentIndex--;
          }, pauseDuration);
        }
      } else {
        setDisplayName(fullName.slice(0, currentIndex));
        currentIndex--;
        if (currentIndex < 0) {
          typing = true;
          currentIndex = 0;
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="About" className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-4 md:mb-0 text-center md:text-left">
        <p className="text-2xl md:text-4xl font-bold mb-2 text-white">
          Hi, I'm <span className="text-indigo-500">Firman Dwi Putra S.</span>
        </p>
        <h1 className="text-xl md:text-2xl font-bold mb-4 text-white">
          {displayName}
          <span className="border-r-2 animate-blink"></span>
        </h1>
        <p className="text-white text-base md:text-lg max-w-md">
          A passionate Fullstack Developer with expertise in building modern web applications.
          Experienced in working with various technologies and frameworks, I enjoy crafting efficient and scalable solutions.
          Constantly exploring new ways to improve and expand my skillset, driven by a love for technology and innovation.
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="https://wa.me/6285959903083" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl hover:text-indigo-400 transition-colors duration-300" />
          </a>
          <a href="https://instagram.com/firmansdwi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-indigo-400 transition-colors duration-300" />
          </a>
          <a href="https://github.com/firmandwiPS" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-white text-2xl hover:text-indigo-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full shadow-lg border-4 border-indigo-500 hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
