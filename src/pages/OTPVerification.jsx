import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggleSwitch from '../components/ThemeToggleSwitch';
import { NavLink } from 'react-router-dom';

const OTPVerification = ({ identifier = "your email", onBack, onVerify }) => {
    // const { theme, toggleTheme } = useTheme(); // Updated to use theme context
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(59);
    const [isResending, setIsResending] = useState(false);
    const inputRefs = useRef([]);

    // Timer logic for resend code
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    // Handle OTP input change
    const handleChange = (value, index) => {
        if (isNaN(value)) return;
        
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input if value entered
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle backspace/delete
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    // Handle paste
    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        if (/^\d+$/.test(pastedData)) {
            const newOtp = pastedData.split('');
            while (newOtp.length < 6) newOtp.push('');
            setOtp(newOtp);
            
            // Focus last filled input
            const lastFilledIndex = Math.min(pastedData.length, 5);
            inputRefs.current[lastFilledIndex]?.focus();
        }
    };

    // Handle resend code
    const handleResend = () => {
        if (timer === 0 && !isResending) {
            setIsResending(true);
            // Simulate API call
            setTimeout(() => {
                setTimer(59);
                setIsResending(false);
                // You can add toast notification here: "Code resent successfully"
            }, 1000);
        }
    };

    // Handle verify
    const handleVerify = () => {
        const otpCode = otp.join('');
        if (otpCode.length === 6) {
            onVerify?.(otpCode);
        }
    };

    // Set initial focus on first input
    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    // Check if all OTP fields are filled
    const isOtpComplete = otp.every(digit => digit !== '');

    return (
        <div className="min-h-screen flex flex-col font-inter relative overflow-hidden transition-colors duration-500">
            
            {/* Dotted Background Pattern with animation */}
                            <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 -z-10 bg-[#F9FAFB] dark:bg-gray-900 
                                        bg-[radial-gradient(#E5E7EB_2px,transparent_2px)] 
                                        dark:bg-[radial-gradient(#374151_2px,transparent_2px)]
                                        bg-size-[30px_30px]"
                            />

            {/* Header */}
            <header className="w-full flex justify-between items-center px-6 sm:px-10 py-5">
                <NavLink to="/login" className="flex mt-8 items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-500 transition-colors font-medium">
                    <ArrowLeft size={20} /> Back
                </NavLink>
                
            </header>

            <main className="flex-1 flex items-center justify-center p-4">
                <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8 sm:p-12 text-center border border-gray-100 dark:border-gray-700 transition-colors duration-500"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                        <ShieldCheck className="text-emerald-500 w-8 h-8" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Verify your identity</h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm sm:text-base">
                        We've sent a 6-digit code to <span className="font-semibold text-gray-900 dark:text-white">{identifier}</span>
                    </p>

                    {/* OTP Input Container */}
                    <div 
                        className="flex justify-between gap-2 mb-8"
                        onPaste={handlePaste}
                    >
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={el => inputRefs.current[index] = el}
                                type="text"
                                inputMode="numeric"
                                maxLength="1"
                                className={`w-10 h-12 sm:w-12 sm:h-14 border-2 rounded-xl text-center text-xl font-bold 
                                          bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                                          focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 
                                          outline-none transition-all ${
                                    digit ? 'border-emerald-500' : 'border-gray-200 dark:border-gray-600'
                                }`}
                                value={digit}
                                onChange={e => handleChange(e.target.value, index)}
                                onKeyDown={e => handleKeyDown(e, index)}
                                onFocus={e => e.target.select()}
                            />
                        ))}
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleVerify}
                        disabled={!isOtpComplete}
                        className={`w-full py-4 text-white font-bold rounded-xl shadow-lg transition-all mb-6 ${
                            isOtpComplete 
                                ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20 cursor-pointer'
                                : 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed'
                        }`}
                    >
                        {isOtpComplete ? 'Verify Account' : 'Enter 6-digit code'}
                    </motion.button>

                    <div className="text-sm">
                        <p className="text-gray-500 dark:text-gray-400">
                            Didn't receive the code? 
                            {timer > 0 ? (
                                <span className="ml-1 text-emerald-500 font-semibold">Resend in {timer}s</span>
                            ) : (
                                <button 
                                    onClick={handleResend}
                                    disabled={isResending}
                                    className={`ml-1 font-bold hover:underline ${
                                        isResending ? 'text-gray-400' : 'text-emerald-500'
                                    }`}
                                >
                                    {isResending ? 'Sending...' : 'Resend Now'}
                                </button>
                            )}
                        </p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default OTPVerification;