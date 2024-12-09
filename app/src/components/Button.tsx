type ButtonProps = {
  children: string;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  //
  ////UI
  return (
    <button
      onClick={onClick}
      className="max-sm:w-full px-[67px] py-[15px] bg-black rounded-full text-white mt-6 sm:mt-[32px] transition ease-in-out duration-100 hover:scale-95"
    >
      {children}
    </button>
  );
};

export default Button;
