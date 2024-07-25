import { useEffect, useState } from "react";
import Image from "../../node_modules/next/image";

export default function Profile() {
  const [displayName, setDisplayName] = useState("");
  const fullName = "Fullstack Developer";
  const typingSpeed = 150; // speed of typing in milliseconds
  const pauseDuration = 2000; // pause before deleting in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    let typing = true; // flag to track typing or deleting
    const interval = setInterval(() => {
      if (typing) {
        setDisplayName(fullName.slice(0, currentIndex));
        currentIndex++;
        if (currentIndex > fullName.length) {
          typing = false;
          setTimeout(() => {
            currentIndex--; // start deleting after pause
          }, pauseDuration);
        }
      } else {
        setDisplayName(fullName.slice(0, currentIndex));
        currentIndex--;
        if (currentIndex < 0) {
          typing = true;
          currentIndex = 0; // reset for the next typing cycle
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval); // cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen p-4">
      <div className="w-full md:w-1/2 flex flex-col   mb-4 md:mb-0">
        <p className="text-xl md:text-4xl font-bold text-center sm:text-left">
          Hi, I'm <span className="text-indigo-500">Firman Dwi Putra S.</span>
        </p>
        <h1 className="text-md md:text-lg font-bold mb-2  text-center sm:text-left">
          {displayName}
          <span className="border-r-2 animate-blink"></span>
        </h1>
        <p className="text-gray-400 text-left">
          A passionate Fullstack Developer with expertise in building modern web applications.
          Experienced in working with various technologies and frameworks, I enjoy crafting efficient and scalable solutions.
          I am constantly exploring new ways to improve and expand my skillset, driven by a love for technology and innovation.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
