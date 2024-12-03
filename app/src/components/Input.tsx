type InputProps = {
  icon: string;
  alt: string;
  type: string;
  placeholder: string;
};

const Input = ({ icon, alt, type, placeholder }: InputProps) => {
  return (
    <div className="relative w-full">
      <img
        src={icon}
        alt={alt}
        width={20}
        height={20}
        className="absolute top-[30%] left-6 opacity-60"
      />
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-[48px] pl-[60px] max-sm:placeholder:text-[14px] bg-white rounded-full"
      />
    </div>
  );
};

export default Input;
