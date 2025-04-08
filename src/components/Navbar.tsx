import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaHandsHelping,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaRecycle
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', icon: <FaHome />, path: '/' },
    { label: 'About', icon: <FaUser />, path: '/about' },
    { label: 'How It Works', icon: <FaProjectDiagram />, path: '/how-it-works' },
    { label: 'Get Involved', icon: <FaHandsHelping />, path: '/get-involved' },
    { label: 'Contact', icon: <FaEnvelope />, path: '/contact' }
  ];

  const handleNav = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/80 border-b border-gray-700 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Brand Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => handleNav('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center">
              <FaRecycle className="text-green-400 text-2xl mr-2 group-hover:rotate-180 transition-transform duration-700" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                ArtCycle
              </span>
              <span className="ml-1 text-xs text-gray-400 font-light hidden sm:inline">
                Nairobi
              </span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ label, icon, path }) => (
              <motion.button
                key={label}
                onClick={() => handleNav(path)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(path) 
                    ? 'text-white bg-gradient-to-r from-blue-600/90 to-green-600/90'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{icon}</span>
                {label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white hover:bg-gray-700/50 p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-900/95 backdrop-blur-sm border-t border-gray-700`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navItems.map(({ label, icon, path }) => (
            <motion.button
              key={label}
              onClick={() => handleNav(path)}
              className={`w-full text-left flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors ${
                isActive(path)
                  ? 'text-white bg-gradient-to-r from-blue-600/90 to-green-600/90'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-3 text-lg">{icon}</span>
              {label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;