import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg'; 
import { useTheme } from '../context/ThemeContext'; // Import the theme context
import ThemeToggleSwitch from '../components/ThemeToggleSwitch'; // Import the custom toggle switch

const Signup = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    // You could also reset the form here
  };


  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden font-sans text-gray-900">
      
      {/* Dotted Background Pattern */}
      <div 
        className="absolute inset-0 -z-10 bg-[#F9FAFB]"
        style={{
          backgroundImage: 'radial-gradient(#E5E7EB 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-2 text-2xl font-bold text-emerald-500">
            <img src={logo} alt="Logo" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Hero Text */}
          <div className="pt-8 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 dark:">
              Become part of Jigawa's growing digital community.
            </h1>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Join a vibrant ecosystem of innovators, creators, and digital enthusiasts building the future of our state.
            </p>
            
            <ul className="space-y-4 inline-block text-left">
              {[
                "Connect with local tech talent",
                "Access exclusive digital resources",
                "Participate in state-wide hackathons"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 font-medium text-gray-700">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-500 text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Signup Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md mx-auto lg:mx-0">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your full name" 
                  className="w-full px-4 py-3 rounded-lg border dark:text-black border-gray-200 focus:border-emerald-500 focus:ring-4 dark:bg-gray-300 focus:ring-emerald-500/10 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com" 
                  className="w-full px-4 py-3 rounded-lg border dark:text-black border-gray-200 focus:border-emerald-500 focus:ring-4 dark:bg-gray-300 focus:ring-emerald-500/10 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+234 000 000 0000" 
                  className="w-full px-4 py-3 rounded-lg border dark:text-black border-gray-200 focus:border-emerald-500 dark:bg-gray-300 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Password</label>
                <input 
                  type="password" 
                  required
                  placeholder="Create a password" 
                  className="w-full px-4 py-3 rounded-lg border dark:text-black border-gray-200 focus:border-emerald-500 dark:bg-gray-300 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-lg transition-colors duration-200"
              >
                Create Account
              </button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Already have an account? <a href="#" className="text-emerald-500 font-semibold hover:underline">Log in</a>
              </p>
            </form>
          </div>

        </div>
      </main>

      {/* Success Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform scale-100 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>


            <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful</h2>
            <p className="text-gray-500 mb-6">
              Welcome to the community! We have sent a verification link to your email.
            </p>
            <button 
            onClick={() => {
            closeModal();
            onSuccess(); // This moves the user to the OTP step
              }}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors">
                Verify My Account
            </button>
            </div>


          </div>
        </div>
      )}

    </div>
  );
};

export default Signup;