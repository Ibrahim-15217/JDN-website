import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg'; 
import { NavLink } from 'react-router-dom';

const Signup = () => {
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Local state as fallback

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Toggle function for local dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Also update the HTML class for Tailwind
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const formItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    })
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  const buttonHover = {
    scale: 1.02,
    boxShadow: "0 10px 30px -10px rgba(16, 185, 129, 0.4)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  };

  const buttonTap = {
    scale: 0.98
  };

  const inputFocus = {
    scale: 1.01,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col relative overflow-hidden font-sans text-gray-900 dark:text-gray-100"
    >
      
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
      {/* Navigation */}
      <motion.nav 
        variants={itemVariants}
        className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-600"
      >
        {/* Logo */}

          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="JDN Logo" className="h-10 w-auto" />
          </NavLink>

        {/* Simple Dark Mode Toggle Button */}
        {/* <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button> */}
      </motion.nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Hero Text */}
          <motion.div 
            variants={heroTextVariants}
            className="pt-8 text-center lg:text-left"
          >
            <motion.h1 
              variants={heroTextVariants}
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
            >
              Become part of Jigawa's growing digital community.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed"
            >
              Join a vibrant ecosystem of innovators, creators, and digital enthusiasts building the future of our state.
            </motion.p>
            
            <motion.ul 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-4 inline-block text-left"
            >
              {[
                "Connect with local tech talent",
                "Access exclusive digital resources",
                "Participate in state-wide hackathons"
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 font-medium text-gray-700 dark:text-gray-300"
                >
                  <motion.span 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring" }}
                    className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 dark:text-emerald-400 text-xs font-bold"
                  >
                    ✓
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Column: Signup Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.3
            }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1) dark:shadow-gray-900/50"
            }}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 w-full max-w-md mx-auto lg:mx-0"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {[
                { label: "Full Name", type: "text", placeholder: "Enter your full name" },
                { label: "Email Address", type: "email", placeholder: "name@example.com" },
                { label: "Phone Number", type: "tel", placeholder: "+234 000 000 0000" },
                { label: "Password", type: "password", placeholder: "Create a password" }
              ].map((field, index) => (
                <motion.div 
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={formItemVariants}
                  whileFocus="focus"
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {field.label}
                  </label>
                  <motion.input 
                    type={field.type} 
                    required
                    placeholder={field.placeholder} 
                    whileFocus={inputFocus}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-4 dark:focus:ring-emerald-500/20 focus:ring-emerald-500/10 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </motion.div>
              ))}

              <motion.button 
                type="submit" 
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="w-full bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-semibold py-3.5 rounded-lg transition-colors duration-200 relative overflow-hidden"
              >
                <motion.span 
                  className="relative z-10"
                  initial={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Create Account
                </motion.span>
                <motion.div 
                  className="absolute inset-0 bg-emerald-600 dark:bg-emerald-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4"
              >
                Already have an account? <a href="/login" className="text-emerald-500 dark:text-emerald-400 font-semibold hover:underline">Log in</a>
              </motion.p>
            </form>
          </motion.div>

        </div>
      </main>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 backdrop-blur-sm p-4"
          >
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.1
                }}
                className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <motion.svg 
                  initial={{ pathLength: 0, rotate: -180 }}
                  animate={{ pathLength: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  className="w-8 h-8 text-emerald-500 dark:text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </motion.svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Registration Successful</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Welcome to the community! We have sent a verification link to your email.
                </p>
                <motion.button 
                  onClick={() => {
                    closeModal();
                    // onSuccess(); // Uncomment when you have this function
                  }}
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Verify My Account
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default Signup;