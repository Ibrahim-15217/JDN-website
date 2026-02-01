import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Community", path: "/community" },
  { label: "Events", path: "/events" },
  { label: "programs", path: "/programs" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100/70 dark:border-white/10 bg-white/85 dark:bg-gray-900/85 backdrop-blur-3xl shadow-sm transition-colors duration-300">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 h-[76px] flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="JDN Logo" className="h-11 w-auto" />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `font-semibold transition ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <NavLink
              to="/login"
              className="hidden sm:inline-flex text-gray-700 dark:text-gray-300 font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              {/* Log In */}
            </NavLink>

            <NavLink
              to="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold rounded-xl transition shadow-md"
            >
              Get Started
            </NavLink>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-gray-800 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/40"
        />

        <div
          className={`absolute top-[76px] left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-white/10 shadow-xl transition-all duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block font-semibold text-lg transition ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-gray-800 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-gray-100 dark:border-white/10 space-y-3">
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center font-semibold px-5 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                Log In
              </NavLink>

              <NavLink
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center font-bold px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition shadow-md"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;
