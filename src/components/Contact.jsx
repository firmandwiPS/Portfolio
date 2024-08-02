import emailjs from 'emailjs-com';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import 'animate.css'; // Import Animate.css for button animations

export default function Contact() {

    useEffect(() => {
        emailjs.init("7EwuIwZyFbBoUwuFt"); // Replace with your EmailJS user ID
        AOS.init(); // Initialize AOS
    }, []);

    function sendMessage(event) {
        event.preventDefault(); // Prevent form submission refresh

        const serviceID = "service_541o8fz";
        const templateID = "template_hc3thop";

        const params = {
            sendername: document.querySelector("#name").value,
            senderemail: document.querySelector("#email").value,
            subject: document.querySelector("#subject").value,
            message: document.querySelector("#message").value
        };

        const sendButton = document.querySelector("#sendButton");
        sendButton.classList.add("animate__animated", "animate__pulse");

        emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert(`Sent! Thank you, ${params.sendername}! Your message has been sent.`);
            // Refresh the page after the animation ends
            setTimeout(() => {
                window.location.reload();
            }, 1000); // Adjust time to match animation duration
        })
        .catch(err => console.error('Failed to send message:', err));
    }

    return (
        <div id="contact" className="bg-gray-900 min-h-screen flex items-center justify-center">
            <div  className="w-full max-w-4xl px-4 py-8">
                <h1   className="text-4xl font-bold mb-8 mt-8 text-center text-white" data-aos="fade-down" data-aos-duration="1000">Contact Us</h1>
                <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200" data-aos="fade-up" data-aos-duration="1000">
                    <form onSubmit={sendMessage}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
                            <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform duration-300 ease-in-out hover:scale-105" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
                            <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform duration-300 ease-in-out hover:scale-105" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                            <input type="text" id="subject" placeholder="Subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform duration-300 ease-in-out hover:scale-105" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea id="message" placeholder="Your message" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform duration-300 ease-in-out hover:scale-105" required></textarea>
                        </div>
                        <div>
                            <button id="sendButton" type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sparkle-effect">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>

            <style jsx>{`
                @keyframes sparkle {
                    0% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.8); }
                    50% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.8); }
                    100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.8); }
                }

                .sparkle-effect:hover {
                    animation: sparkle 1s infinite;
                }
            `}</style>
        </div>
    );
}
