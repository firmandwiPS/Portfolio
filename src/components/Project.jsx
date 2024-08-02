import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const exampleImages = [
    'https://via.placeholder.com/400x300?text=Project+1',
    'https://via.placeholder.com/400x300?text=Project+2',
    'https://via.placeholder.com/400x300?text=Project+3',
];

const projects = [
    {
        title: 'Project One',
        description: 'Description for project one. Built with modern web technologies.',
        link: 'https://example.com/1',
        image: exampleImages[0],
    },
    {
        title: 'Project Two',
        description: 'Description for project two. An innovative solution for business needs.',
        link: 'https://example.com/2',
        image: exampleImages[1],
    },
    {
        title: 'Project Three',
        description: 'Description for project three. Showcases advanced design skills.',
        link: 'https://example.com/3',
        image: exampleImages[2],
    },
];

const ProjectCard = ({ project }) => {
    return (
        <div
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out max-w-sm m-4"
            data-aos="fade-up" // Add AOS attribute for animation
            data-aos-duration="1000"
        >

            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-center mb-4">{project.title}</h2>
                <p className="text-gray-700 text-center mb-4">
                    {project.description}
                </p>
                <div className="flex justify-center">
                    <a
                        href={project.link}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default function Project() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    return (

        <div id="Projects" className="min-h-screen flex flex-wrap items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">

            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}
