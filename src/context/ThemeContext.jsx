import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

// 2. Custom Hook to use the Theme
export const useTheme = () => useContext(ThemeContext);

// 3. Provider Component
export const ThemeProvider = ({ children }) => {
    // Check local storage for initial state, default to false (light mode)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        // Tailwind's 'dark' class is applied if true
        return savedTheme === 'dark';
    });

    // 4. Effect to apply the 'dark' class and save to localStorage
    useEffect(() => {
        const root = window.document.documentElement;
        
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // Function to toggle the theme
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

// ---
// TO USE THIS: Wrap your main app component (e.g., in index.js or App.js):
/*
<ThemeProvider>
    <HomePage />
</ThemeProvider>
*/

export default ThemeContext;