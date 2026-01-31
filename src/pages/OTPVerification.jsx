import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggleSwitch from '../components/ThemeToggleSwitch';

const OTPVerification = ({ identifier = "your email", onBack, onVerify }) => {
    // const { isDarkMode, toggleDarkMode } = useTheme();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(59);

    // Timer logic for resend code
    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) setTimer(timer - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    // const dotColor = isDarkMode ? '#374151' : '#E5E7EB';
    // const bodyBgColor = isDarkMode ? '#111827' : '#F9FAFB';

    return (
        <div className="min-h-screen flex flex-col font-inter relative overflow-hidden transition-colors duration-500">
            
            {/* Dotted Background Pattern */}
          <div 
            className="absolute inset-0 -z-10 bg-[#F9FAFB]"
            style={{
              backgroundImage: 'radial-gradient(#E5E7EB 2px, transparent 2px)',
              backgroundSize: '30px 30px'
            }}
            />

            {/* Header */}
            <header className="w-full flex justify-between items-center px-6 sm:px-10 py-5">
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-500 transition-colors font-medium"
                >
                    <ArrowLeft size={20} /> Back
                </button>
                {/* <ThemeToggleSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> */}
            </header>

            <main className="flex-1 flex items-center justify-center p-4">
                <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8 sm:p-12 text-center border border-gray-100 dark:border-gray-700 transition-colors duration-500"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                        <ShieldCheck className="text-emerald-500 w-8 h-8" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Verify your identity</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm sm:text-base">
                        We've sent a 6-digit code to <span className="font-semibold text-gray-900 dark:text-white">{identifier}</span>
                    </p>

                    <div className="flex justify-between gap-2 mb-8">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className="w-10 h-12 sm:w-12 sm:h-14 border-2 rounded-xl text-center text-xl font-bold bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        ))}
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onVerify(otp.join(''))}
                        className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all mb-6"
                    >
                        Verify Account
                    </motion.button>

                    <div className="text-sm">
                        <p className="text-gray-500 dark:text-gray-400">
                            Didn't receive the code? 
                            {timer > 0 ? (
                                <span className="ml-1 text-emerald-500 font-semibold">Resend in {timer}s</span>
                            ) : (
                                <button className="ml-1 text-emerald-500 font-bold hover:underline">Resend Now</button>
                            )}
                        </p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default OTPVerification;