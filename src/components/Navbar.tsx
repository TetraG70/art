import { useState } from 'react';
import logoImg from '../assets/images/logo.png'
import { 
  FaHome, 
  FaUser, 
  FaProjectDiagram, 
  FaImages, 
  FaHandsHelping, 
  FaBlog, 
  FaEnvelope,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gray-900 border-b border-gray-700 backdrop-filter backdrop-blur-lg bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-white text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
                <img src={logoImg} alt="Logo" className="h-16 w-16  rounded-full p-2" />
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <NavLink icon={<FaHome className="mr-2" />} label="Home" />
                <NavLink icon={<FaUser className="mr-2" />} label="About" />
                <NavLink icon={<FaProjectDiagram className="mr-2" />} label="Projects" />
                <NavLink icon={<FaImages className="mr-2" />} label="Gallery" />
                <NavLink icon={<FaHandsHelping className="mr-2" />} label="Get Involved" />
                <NavLink icon={<FaBlog className="mr-2" />} label="Blog" />
                <NavLink 
                  icon={<FaEnvelope className="mr-2" />} 
                  label="Contact"
                  specialStyle="relative group hover:bg-blue-600 transition-colors px-4 py-2 rounded-lg"
                />
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink icon={<FaHome />} label="Home" />
            <MobileNavLink icon={<FaUser />} label="About" />
            <MobileNavLink icon={<FaProjectDiagram />} label="Projects" />
            <MobileNavLink icon={<FaImages />} label="Gallery" />
            <MobileNavLink icon={<FaHandsHelping />} label="Get Involved" />
            <MobileNavLink icon={<FaBlog />} label="Blog" />
            <MobileNavLink 
              icon={<FaEnvelope />} 
              label="Contact"
              specialStyle="bg-blue-600 hover:bg-blue-700"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

// Reusable component for desktop nav links

// Reusable component for desktop nav links
const NavLink: React.FC<{ icon: React.ReactNode; label: string; specialStyle?: string }> = ({ icon, label, specialStyle = "" }) => (
  <a
    href="#"
    className={`text-gray-300 hover:text-white flex items-center px-3 py-2 rounded-md text-sm font-medium ${specialStyle}`}
  >
    <span className="mr-2">{icon}</span>
    {label}
  </a>
);

// Reusable component for mobile nav links
const MobileNavLink: React.FC<{ icon: React.ReactNode; label: string; specialStyle?: string }> = ({ icon, label, specialStyle = "" }) => (
  <a
    href="#"
    className={`text-gray-300 hover:text-white flex items-center px-3 py-2 rounded-md text-base font-medium ${specialStyle}`}
  >
    <span className="mr-3 text-lg">{icon}</span>
    {label}
  </a>
);

export default Navbar;