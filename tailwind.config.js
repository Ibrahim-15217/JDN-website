/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. **Crucial for Dark Mode Toggle:** This tells Tailwind to use the 'dark' class applied by React to switch styles.
  darkMode: 'class', 

  // 2. Specify files to scan for Tailwind classes
  content: [
    // Adjust these paths to correctly point to your React files (.js, .jsx, .ts, .tsx)
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  
  // 3. Optional: Define custom styles/fonts used in your design
  theme: {
    extend: {
      fontFamily: {
        // We used 'Inter' in the CSS, so let's make it available to Tailwind
        inter: ['Inter', 'sans-serif'], 
      },
      colors: {
        // You can define a custom primary color here if you want an exact shade, 
        // but emerald-500 is already close to your design's green.
      }
    },
  },
  plugins: [],
}