import React from 'react';
import { motion } from 'framer-motion';
// Import Lucide Icons
import { Sun, Moon } from 'lucide-react'; 

const ThemeToggleSwitch = ({ isDarkMode, toggleDarkMode }) => {
    // Colors and positioning based on the visual design
    
    const sliderBg = isDarkMode ? 'bg-emerald-700' : 'bg-white';
    const circlePosition = isDarkMode ? 'translate-x-full' : 'translate-x-0';
    
    // Icon colors based on the current mode
    const sunColor = isDarkMode ? 'text-gray-400' : 'text-gray-700';
    const moonColor = isDarkMode ? 'text-white' : 'text-emerald-500';

    // Base properties for Lucide icons
    const iconProps = {
        size: 20, // Corresponds to h-5 w-5
        strokeWidth: 2,
    };

    return (
        <motion.div 
            className="w-18 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center p-1 relative shadow-inner cursor-pointer"
            onClick={toggleDarkMode}
            aria-checked={isDarkMode}
            role="switch"
            tabIndex="0"
            whileTap={{ scale: 0.95 }}
        >
            {/* Background Track with Icons */}
            <div className="absolute inset-1 flex justify-between px-2 items-center">
                {/* Sun Icon (Left Side) - Now using Lucide */}
                <Sun 
                    {...iconProps} 
                    className={`${sunColor} transition-colors duration-300 text-yellow-400`} 
                />
                
                {/* Moon Icon (Right Side) - Now using Lucide */}
                <Moon 
                    {...iconProps} 
                    className={`${moonColor} transition-colors duration-300 text-gray-800`} 
                />
            </div>

            {/* Moving Circle (The Actual Switch) */}
            <motion.div
                className={`w-8 h-8 rounded-full absolute transition-all duration-500 ease-in-out ${sliderBg} ${circlePosition} shadow-md`}
                layout 
                transition={{ type: "spring", stiffness: 700, damping: 50 }}
                
            >
                {/* Icon inside the moving circle (Moon Icon) */}
                {isDarkMode && (
                    <Moon 
                        size={24} // Slightly larger for the circle
                        strokeWidth={2}
                        className="h-full w-full p-1.5 text-white" 
                    />
                    
                )}
            </motion.div>
        </motion.div>
    );
};

export default ThemeToggleSwitch;