import React from 'react';
import logo from '../assets/logo.svg';

const Footer = () => {
    const footerLinks = [
        { 
            title: 'Menu', 
            links: ['Home', 'About Us', 'Community', 'Events'] 
        },
        { 
            title: 'Resources', 
            links: ['Talent Portal', 'Startups', 'Government Data', 'Learning Hub'] 
        },
        { 
            title: 'Contact', 
            links: ['info@jigawadigital.com', '+234 800 123 4567', 'Dutse, Jigawa State'] 
        },
    ];

    return (
        // Main Footer Background and Border Control
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-600 pt-20 transition-colors duration-300">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
                
                {/* Main Footer Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12">
                    
                    {/* Column 1: Logo & Description (1.8fr equivalent) */}
                    <div className="col-span-2">
                        <svg width="24" height="24">
                        </svg>
                        <img src={logo} alt="Logo" />

                        {/* Description Text Color Control */}
                        <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm transition-colors duration-300">
                            Empowering the next generation of innovators in Jigawa State through technology, community, and support.
                        </p>
                    </div>

                    {/* Other Link Columns */}
                    {footerLinks.map((col) => (
                        <div key={col.title}>
                            {/* Title Text Color Control */}
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">{col.title}</h4>
                            <ul className="space-y-4">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a 
                                            href="#" 
                                            // Link Text Color Control
                                            className="text-base text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                {/* Border Color Control */}
                <div className="border-t border-gray-100 dark:border-gray-800 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 transition-colors duration-300">
                    {/* Copyright Text Color Control */}
                    <p className="dark:text-gray-500">&copy; {new Date().getFullYear()} Jigawa Digital Community. All rights reserved.</p>
                    <div className="flex space-x-6 mt-3 sm:mt-0">
                        {/* Policy Links Color Control */}
                        <a href="#" className="dark:text-gray-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition">Privacy Policy</a>
                        <a href="#" className="dark:text-gray-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;