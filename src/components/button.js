
const Button = ({ children, onClick, color, padding, disabled }) => {
  return (
    <button
      className={`${color ? color : 'bg-main'} ${padding ? padding : 'p-3'} rounded-full text-white shadow-lg font-bold hover:bg-main-light dark:hover:shadow-neutral-800 hover:shadow-xl transition-colors duration-300 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={onClick}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
