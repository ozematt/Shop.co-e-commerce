type ButtonProps = {
  children: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({ children, onClick, type }: ButtonProps) => {
  //
  ////UI
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className="mt-6 rounded-full bg-black px-[67px] py-[15px] text-white transition duration-100 ease-in-out hover:scale-95 max-sm:w-full sm:mt-[32px]"
    >
      {children}
    </button>
  );
};

export default Button;
