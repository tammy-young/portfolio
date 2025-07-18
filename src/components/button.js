
const Button = ({ children, onClick, color, padding }) => {
  return (
    <button
      className={`${color ? color : 'bg-main'} ${padding ? padding : 'p-3'} rounded-full text-white shadow-lg font-bold hover:bg-main-light dark:hover:shadow-neutral-800 hover:shadow-xl transition-colors duration-300 flex justify-center items-center`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
