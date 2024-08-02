import { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function MySkill() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
  }, []);

  return (
    <div>
      <section id="my-skill" className="bg-indigo-500 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-8 text-white animate-pulse">My Skills</h2>
        
        <div className="skills-grid">
          <div
            className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform duration-500"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <FaHtml5 size={60} color="#E44D26" />
          </div>
          <div
            className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform duration-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaCss3Alt size={60} color="#1572B6" />
          </div>
          <div
            className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform duration-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaJsSquare size={60} color="#F7DF1E" />
          </div>
        </div>

        <ScrollLink to="framework-skill" smooth duration={1000}>
          <button className="mt-8 px-6 py-3 bg-white text-indigo-500 font-bold rounded-lg hover:bg-indigo-100 transition-colors">
            Go to Framework Skills
          </button>
        </ScrollLink>
      </section>

      <section id="framework-skill" className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-500 animate-pulse">Framework Skills</h2>
        
        <div className="skills-grid">
          <div
            className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform duration-500"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <SiTailwindcss size={60} color="#06B6D4" />
          </div>
          <div
            className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform duration-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaBootstrap size={60} color="#7952B3" />
          </div>
          <div
            className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform duration-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <SiNextdotjs size={60} color="#000000" />
          </div>
          <div
            className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform duration-500"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FaReact size={60} color="#61DAFB" />
          </div>
        </div>

        <ScrollLink to="my-skill" smooth duration={1000}>
          <button className="mt-8 px-6 py-3 bg-white text-indigo-500 font-bold rounded-lg hover:bg-indigo-100 transition-colors">
            Back to My Skills
          </button>
        </ScrollLink>
      </section>
    </div>
  );
}
