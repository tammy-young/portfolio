import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = () => {
  return (
    <div>
      <button
        className="fixed bottom-4 right-4 p-3 rounded-full bg-main text-white shadow-lg font-bold hover:bg-main-light dark:hover:shadow-neutral-800 hover:shadow-xl transition-colors duration-300 flex justify-center items-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        type="button"
      >
        <ArrowUpwardIcon />
      </button>
    </div>
  );
}

export default ScrollToTopButton;
