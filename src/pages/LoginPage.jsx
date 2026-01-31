import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react'; 
import { useTheme } from '../context/ThemeContext'; 
import ThemeToggleSwitch from '../components/ThemeToggleSwitch'; 
import logo from '../assets/logo.svg';


const LoginPage = ({ onContinue }) => {
    // const { isDarkMode, toggleDarkMode } = useTheme(); 
    const [credential, setCredential] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (credential.length > 5) {
        onContinue(credential); // This moves the user to the OTP step
    }
};
    
    // // Define dot and background colors based on theme
    // const dotColor = isDarkMode ? '#374151' : '#E5E7EB'; 
    // const bodyBgColor = isDarkMode ? '#111827' : '#F9FAFB'; 

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden font-sans text-gray-900">
          
          {/* Dotted Background Pattern */}
          <div
            className="
                absolute inset-0 -z-10
                bg-[#F9FAFB] dark:bg-[#feffff]
            "
            style={{
                backgroundImage: `
                radial-gradient(#E5E7EB 2px, transparent 2px),
                radial-gradient(#8e9199 2px, transparent 2px)
                `,
                backgroundSize: "30px 30px",
                backgroundPosition: "0 0, 0 0"
            }}
            />
    
          {/* Navigation */}
          <nav className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center gap-2 text-2xl font-bold text-emerald-500">
                <img src={logo} alt="Logo" />
            </div>
          </nav>

        

            {/* Main Content Area (Centers the card both vertically and horizontally) */}
            <main className="grow flex justify-center items-center w-full p-4 sm:p-6 md:p-8">
                <motion.div 
                    // Card Styling: Responsive width, padding, and centered shadow
                    className="bg-white dark:bg-gray-800 rounded-3xl border-gray-100 shadow-xl w-full max-w-sm sm:max-w-md p-6 sm:p-10 text-center transition-colors duration-500"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 p-3 transition-colors duration-300">Welcome Back!</h2>
                    <p className="text-gray-800 dark:text-gray-200 text-base mb-8 leading-relaxed transition-colors duration-300">
                        Sign in to access your community, events, and learning.
                    </p>

                    <form onSubmit={handleSubmit}>
                        {/* Credential Input */}
                        <div className="form-group mb-6">
                            <label className="block text-left font-semibold text-gray-800 dark:text-gray-200 text-sm mb-2 transition-colors duration-300">Email or Phone</label>
                            <div className="relative">
                                <input 
                                    type="text"
                                    value={credential}
                                    onChange={(e) => setCredential(e.target.value)}
                                    // Responsive input sizing
                                    className="w-full py-3 pl-4 pr-10 border border-gray-300  bg-white dark:bg-gray-300 dark:text-blck rounded-lg outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all text-base"
                                    placeholder="name@example.com or 080..."
                                    required
                                />
                                <Mail size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                            </div>
                        </div>
                        
                        <p className="text-gray-600 font-bold dark:text-gray-400 text-xs mb-6 text-left transition-colors duration-300">
                            We'll send a secure link or code.
                        </p>

                        {/* Continue Button */}
                        <motion.button 
                            type="submit" 
                            className="w-full py-3.5 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition text-base shadow-sm shadow-emerald-500/30 dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:shadow-emerald-600/40"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Continue
                        </motion.button>
                    </form>

                    {/* Signup Link */}
                    <div className="mt-8 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                        No account yet? <a href="#" className="text-emerald-500 dark:text-emerald-400 font-semibold hover:underline">Join the Network</a>
                    </div>
                    
                </motion.div>
            </main>

        </div>
    );
};
export default LoginPage;