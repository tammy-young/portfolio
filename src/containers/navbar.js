import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className={`hidden lg:flex fixed left-0 top-0 h-full w-64 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-xl' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
      }`}>
        <div className="flex flex-col justify-center items-start p-8 w-full">
          <div className="mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
              Tammy Young
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Software Developer</p>
          </div>
          
          <div className="flex flex-col space-y-6 text-lg font-medium">
            <Link 
              to={{hash: "#about"}} 
              className="relative text-gray-700 dark:text-gray-300 hover:text-accent-purple dark:hover:text-accent-purple transition-colors duration-300 group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-pink transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to={{hash: "#projects"}} 
              className="relative text-gray-700 dark:text-gray-300 hover:text-accent-blue dark:hover:text-accent-blue transition-colors duration-300 group py-2"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to={{hash: "#experience"}} 
              className="relative text-gray-700 dark:text-gray-300 hover:text-accent-green dark:hover:text-accent-green transition-colors duration-300 group py-2"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-green to-accent-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to={{hash: "#contact"}} 
              className="relative text-gray-700 dark:text-gray-300 hover:text-accent-orange dark:hover:text-accent-orange transition-colors duration-300 group py-2"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-orange to-accent-pink transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-6 left-6 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {mobileMenuOpen ? (
          <CloseIcon className="text-gray-700 dark:text-gray-300" />
        ) : (
          <MenuIcon className="text-gray-700 dark:text-gray-300" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <nav className={`lg:hidden fixed left-0 top-0 h-full w-80 z-50 transform transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl`}>
        <div className="flex flex-col justify-center items-start p-8 h-full">
          <div className="mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
              Tammy Young
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Software Developer</p>
          </div>
          
          <div className="flex flex-col space-y-8 text-xl font-medium">
            <Link 
              to={{hash: "#about"}} 
              onClick={closeMobileMenu}
              className="relative text-gray-700 dark:text-gray-300 hover:text-accent-purple dark:hover:text-accent-purple transition-colors duration-300 group py-3"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-pink transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to={{hash: "#projects"}} 
              onClick={closeMobileMenu}
              className="relative text-gray-700 dark:text-gray-300 hover:text-accent-blue dark:hover:text-accent-blue transition-colors duration-300 group py-3"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to={{hash: "#experience"}} 
              onClick={closeMobileMenu}
              className="relative text-gray-700 dark:text-gray-300 hover:text-accent-green dark:hover:text-accent-green transition-colors duration-300 group py-3"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-green to-accent-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to={{hash: "#contact"}} 
              onClick={closeMobileMenu}
              className="relative text-gray-700 dark:text-gray-300 hover:text-accent-orange dark:hover:text-accent-orange transition-colors duration-300 group py-3"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-orange to-accent-pink transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
