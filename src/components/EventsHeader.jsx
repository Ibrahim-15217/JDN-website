import React from 'react';
import logo from '../assets/logo.svg';

const EventsHeader = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 py-3 flex justify-between items-center">
                {/* Logo & Navigation */}
                <div className="flex items-center">
                    <div className="flex items-center gap-2 text-xl font-extrabold text-emerald-500 mr-8">
                        <svg width="24" height="24">
                        </svg>
                        <img src={logo} alt="Logo" />
                    </div>
                    
                    <nav className="hidden lg:flex space-x-5">
                        {['Home', 'News', 'Community', 'Services', 'Events', 'Learning'].map(link => (
                            <a 
                                key={link} 
                                href={`#${link.toLowerCase()}`} 
                                className={`text-gray-500 hover:text-emerald-500 font-medium text-base transition duration-150 ${link === 'Events' ? 'text-emerald-500 font-semibold' : ''}`}
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Search and Join Button */}
                <div className="flex items-center space-x-4">
                    <div className="hidden sm:flex items-center border border-gray-200 rounded-lg py-2 px-3 bg-gray-50">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        <input type="text" placeholder="Search" className="ml-2 w-36 bg-transparent outline-none text-sm text-gray-700" />
                    </div>
                    <a href="#" className="py-2.5 px-5 bg-emerald-500 text-white font-semibold text-sm rounded-lg hover:bg-emerald-600 transition shadow-md">
                        Join Network
                    </a>
                </div>
            </div>
        </header>
    );
};
export default EventsHeader;