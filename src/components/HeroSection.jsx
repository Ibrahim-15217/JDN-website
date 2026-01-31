import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

// Parent container animation for staggered children
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Delay between each child animation
        },
    },
};

// Animation properties for individual elements (slide up and fade in)
const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
    // Get the current theme state
    // const { isDarkMode } = useTheme(); 
    
    const stats = ["500+ Startups", "10k+ Talents", "Active Hubs"];

    const partners = [
        {
            name: "NITDA",
            logo: "/logos/NITDA.png"
        },
        {
            name: "NCC",
            logo: "/logos/NCC.png"
        },
        {
            name: "FMCIDE",
            logo: "/logos/FMCIDE.png"
        },
        {
            name: "NDPC",
            logo: "/logos/NDPC.png"
        },
    ];

    // Dynamic class for the Curved Background Shape
    // const curvedBgClass = isDarkMode
        // ? "bg-gradient-to-br from-emerald-700 to-emerald-500 opacity-80"
        // : "bg-gradient-to-br from-emerald-500 to-green-400 opacity-90";

    return (
        <>
            {/* Main Section Background Color Control */}
            <section className="pt-32 pb-32 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-center relative">
                        
                        {/* Left Content */}
                        <motion.div
                            className="text-center lg:text-left"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.h1 
                                // Heading Text Color Control
                                className="text-5xl lg:text-6xl font-extrabold text-green-950 dark:text-green-100 leading-tight mb-8 transition-colors duration-300"
                                variants={item}
                            >
                                Empowering Jigawa Through Digital Innovation.
                            </motion.h1>
                            <motion.p 
                                // Body Text Color Control
                                className="text-xl text-gray-500 dark:text-gray-400 mb-9 leading-relaxed transition-colors duration-300"
                                variants={item}
                            >
                                Your ultimate gateway to digital skills, startup support, and the data transformation of our state.
                            </motion.p>
                            
                            <motion.div className="flex justify-center lg:justify-start space-x-5 mb-12" variants={item}>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        to="/signup"      
                                        className="inline-flex items-center justify-center py-3 px-6 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/30 dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:shadow-emerald-600/40"
                                    >
                                    Get Started
                                    </Link>
                                    
                                </motion.div>
                                
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        to="/programs"
                                        className="inline-flex items-center justify-center py-3 px-5 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-500 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                                    >
                                        View Programs
                                    </Link>
                                    </motion.div>

                            </motion.div>

                            <motion.div className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4 text-base text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300" variants={item}>
                                {stats.map(stat => (
                                    <div key={stat} className="flex items-center gap-2">
                                        {/* Checkmark color stays strong */}
                                        <span className="text-emerald-500 dark:text-emerald-400 font-bold">✓</span> {stat}
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                        
                        {/* Right Image with Animation */}
                        <motion.div 
                            className="relative h-[500px] w-full mt-10 lg:mt-0"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            
                            <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1682617367276-bbacadf73747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBub3J0aGVybiUyMG5pZ2VyaWFucyUyMGdhdGhlcmluZ3MlMjB3aXRoJTIwY29tcHV0ZXJzfGVufDB8fDB8fHww"
                                alt="Hero"
                                className="
                                w-[720px] h-[480px]
                                object-cover
                                rounded-3xl
                                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                                ring-1 ring-white/10
                                transition-transform duration-500
                                hover:scale-[1.02]
                                "
                            />

                            {/* subtle overlay */}
                            <div className="
                                absolute inset-0
                                rounded-3xl
                                bg-linear-to-tr
                                from-black/20
                                via-transparent
                                to-emerald-500/10
                                pointer-events-none
                            " />
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
                

            {/* Partners Strip (Simple fade-in) */}
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
                    <p className='text-center text-xl text-gray-400 dark:text-gray-500 my-8 font-medium transition-colors duration-300'>TRUSTED BY</p>
                    <div className="flex justify-around items-center gap-10 opacity-70">
                        {partners.map((partner) => (
                            <div
                                key={partner.name}
                                className="
                                    flex items-center gap-2 justify-center
                                    grayscale hover:grayscale-0
                                    transition-all duration-300
                                "
                                >
                                <img
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className="
                                    lg:h-40 lg:w-auto
                                    h-20 w-auto
                                    object-contain
                                    transition-colors duration-300
                                    mb-3
                                    "
                                />
                                
                            </div>
                        ))}
                    </div>
                </div>
              
        </>
    );
};
export default HeroSection;