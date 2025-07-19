import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';

const NAV_ITEMS = [
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
];

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = NAV_ITEMS.map(item => item.hash.substring(1));
    const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible
        let mostVisible = null;
        let maxRatio = 0;

        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry.target.id;
          }
        });

        // If we have a most visible section, set it as active
        if (mostVisible) {
          setActiveSection(mostVisible);
        } else {
          // Check if we're at the top of the page (before any sections)
          if (window.scrollY < 100) {
            setActiveSection('');
          }
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7], // Multiple thresholds for better detection
        rootMargin: '-20% 0px -20% 0px' // Only consider the middle 60% of viewport
      }
    );

    // Observe all sections
    sectionElements.forEach(element => observer.observe(element));

    // Initial check for page load
    const handleInitialCheck = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    handleInitialCheck();

    return () => {
      sectionElements.forEach(element => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return activeSection;
};

const NavHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen && (
        <div
          className="fixed w-screen h-dvh bg-black bg-opacity-50 z-[99] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed top-0 left-0 h-dvh w-2/3 max-w-[320px] z-[100] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <NavMenu setIsOpen={setIsOpen} />
      </div>

      <button
        className="bg-white dark:bg-neutral-700 rounded-full p-3 shadow-lg m-4 fixed top-0 left-0 z-[99] transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon className="text-3xl dark:text-white text-neutral-400 cursor-pointer" />
      </button>
    </div>
  )
}

const NavMenu = ({ setIsOpen = null }) => {
  const activeSection = useActiveSection();

  return (
    <div className="flex flex-col justify-center dark:text-neutral-400 h-dvh bg-white dark:bg-neutral-800 gap-12 px-8 w-full font-semibold shadow-xl absolute left-0 sticky top-0">
      {
        setIsOpen && (
          <div className="absolute top-2 right-0 w-full h-16 flex items-center justify-end px-4">
            <button onClick={() => setIsOpen && setIsOpen(false)} className="dark:bg-neutral-700 bg-white shadow-lg rounded-full p-3">
              <CloseIcon className='text-3xl dark:text-white text-neutral-400 cursor-pointer' />
            </button>
          </div>
        )
      }
      <Link className="flex flex-col" to="#intro">
        <h1 className="text-3xl font-bold pb-1 text-main">Tammy Young</h1>
        <p className="text-neutral-500 font-normal dark:text-neutral-400">Software Developer</p>
      </Link>
      {
        NAV_ITEMS.map((item, index) => {
          const isActive = activeSection === item.hash.substring(1);
          return (
            <Link
              key={index}
              to={item.hash}
              className={`text-xl transition-colors duration-300 relative ${
                isActive 
                  ? 'text-main font-bold' 
                  : 'hover:text-main dark:text-neutral-300'
              }`}
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              {item.name}
              {isActive && (
                <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-main rounded-full"></span>
              )}
            </Link>
          );
        })
      }
    </div>
  )
}

const Navigation = () => {
  return (
    <>
      <div className="lg:flex hidden lg:w-1/5 lg:min-w-[270px] lg:max-w-[320px]">
        <NavMenu />
      </div>
      <div className="absolute lg:hidden">
        <NavHamburger />
      </div>
    </>
  )
}

export default Navigation;
