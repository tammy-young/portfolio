import { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 lg:right-8 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    }`}>
      <Fab
        onClick={scrollToTop}
        className="!bg-gradient-to-r !from-accent-purple !to-accent-pink !text-white !shadow-lg hover:!shadow-xl !transition-all !duration-300"
        sx={{
          background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
          '&:hover': {
            background: 'linear-gradient(135deg, #7c3aed, #db2777)',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </div>
  );
};

export default BackToTop;
