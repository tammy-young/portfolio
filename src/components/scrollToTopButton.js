import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    showScrollToTop && (
      <button
        className="fixed bottom-4 right-4 p-3 rounded-full bg-main text-white shadow-lg font-bold hover:bg-main-light dark:hover:shadow-neutral-800 hover:shadow-xl transition-colors duration-300 flex justify-center items-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        type="button"
      >
        <ArrowUpwardIcon />
      </button>
    )
  );
}

export default ScrollToTopButton;
