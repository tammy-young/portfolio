
const Button = ({ children, onClick, color }) => {
  return (
    <button
      className={`${color ? color : 'bg-main'} p-3 px-6 rounded-full text-white shadow-lg font-bold hover:bg-main-light hover:shadow-xl transition-colors duration-300 flex justify-center items-center`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
