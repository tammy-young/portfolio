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
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.hash.substring(1)); // Remove '#' from hash
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};

const NavHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen && (
        <div
          className="fixed w-screen h-screen bg-black bg-opacity-50 z-[99] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed top-0 left-0 h-screen w-2/3 max-w-[320px] z-[100] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
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
    <div className="flex flex-col justify-center dark:text-neutral-400 h-screen bg-white dark:bg-neutral-800 gap-12 px-8 w-full font-semibold shadow-xl absolute left-0 sticky top-0">
      {
        setIsOpen && (
          <div className="absolute top-2 right-0 w-full h-16 flex items-center justify-end px-4">
            <button onClick={() => setIsOpen && setIsOpen(false)} className="dark:bg-neutral-700 bg-white shadow-lg rounded-full p-3">
              <CloseIcon className='text-3xl dark:text-white text-neutral-400 cursor-pointer' />
            </button>
          </div>
        )
      }
      <Link className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/#">
        <h1 className="text-3xl font-bold text-main">Tammy Young</h1>
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
