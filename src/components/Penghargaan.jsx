// Penghargaan.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Certificate({ title, recipient, course, date, signature, image }) {
    return (
        <div
            className="relative w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out mb-8"
            data-aos="fade-up" // Add AOS attribute for animation
            data-aos-duration="1000"
        >
            <img
                src={image}
                alt="Certificate Template"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative p-8">
                <div className="text-center mb-4">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
                    <p className="text-gray-600">This is to certify that</p>
                </div>
                <div className="text-center mb-8">
                    <p className="text-3xl font-semibold text-gray-900">{recipient}</p>
                    <p className="text-gray-600 mt-2">has successfully completed the course</p>
                    <p className="text-2xl font-medium text-gray-800 mt-2">{course}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-left">
                        <p className="text-gray-600">Date</p>
                        <p className="text-gray-800">{date}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-600">Signature</p>
                        <p className="text-gray-800">{signature}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Penghargaan() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen bg-indigo-500 py-10 px-4">
            <h2 className="text-5xl font-bold text-white animate-pulse mb-10">Certificate</h2>
            <Certificate
                title="Certificate of Achievement"
                recipient="[Recipient's Name 1]"
                course="[Course Name 1]"
                date="[Date 1]"
                signature="[Signature 1]"
                image="https://via.placeholder.com/400x300" // Replace with your image URL
            />
            <Certificate
                title="Excellence Award"
                recipient="[Recipient's Name 2]"
                course="[Course Name 2]"
                date="[Date 2]"
                signature="[Signature 2]"
                image="https://via.placeholder.com/400x300" // Replace with your image URL
            />
        </div>
    );
}
