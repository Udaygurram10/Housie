import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 relative
        ${isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-500'}`}
    >
      {isActive && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 bg-primary-50 rounded-full"
          style={{ zIndex: -1 }}
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}
      {children}
    </Link>
  );
};

export const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide navbar on scroll down
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Show navbar on scroll up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="glass-nav">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center py-3">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-1">
              Tambola
            </h1>
            <div className="text-xs text-gray-400 mb-3">Built by Uday Gurram</div>
            <div className="flex space-x-2">
              <NavLink to="/">Host</NavLink>
              <NavLink to="/player">Player</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
