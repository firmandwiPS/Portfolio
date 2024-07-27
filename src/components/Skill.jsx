import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

export default function MySkill() {
  const [visible, setVisible] = useState(false);
  const [frameworkVisible, setFrameworkVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const mySkillSection = document.getElementById('my-skill');
      const frameworkSection = document.getElementById('framework-skill');
      
      if (mySkillSection) {
        const sectionPosition = mySkillSection.offsetTop;
        if (scrollPosition >= sectionPosition) {
          setVisible(true);
        }
      }

      if (frameworkSection) {
        const frameworkPosition = frameworkSection.offsetTop;
        if (scrollPosition >= frameworkPosition) {
          setFrameworkVisible(true);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      <section id="my-skill" className="bg-indigo-500 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-8 text-white animate-pulse">My Skills</h2>
        
        <div className={`skills-grid transition-opacity duration-1000 ${visible ? 'opacity-100 animate-bounce' : 'opacity-0'}`}>
          <div className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
            <FaHtml5 size={60} color="#E44D26" />
          </div>
          <div className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
            <FaCss3Alt size={60} color="#1572B6" />
          </div>
          <div className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
            <FaJsSquare size={60} color="#F7DF1E" />
          </div>
        </div>

        <ScrollLink to="framework-skill" smooth duration={1000}>
          <button className="mt-8 px-6 py-3 bg-white text-indigo-500 font-bold rounded-lg hover:bg-indigo-100 transition-colors">
            Go to Framework Skills
          </button>
        </ScrollLink>
      </section>

      <section id="framework-skill" className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-500">Framework Skills</h2>
        
        <div className={`skills-grid transition-opacity duration-1000 ${frameworkVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
          <div className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
            <SiTailwindcss size={60} color="#06B6D4" />
          </div>
          <div className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
            <FaBootstrap size={60} color="#7952B3" />
          </div>
          <div className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
            <SiNextdotjs size={60} color="#000000" />
          </div>
          <div className="skill-card p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
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
