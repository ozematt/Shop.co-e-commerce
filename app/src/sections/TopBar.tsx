import close from "../assets/Close.png";

const TopBar = () => {
  return (
    <section className="relative">
      <div className="sm:px-[100px] h-[34px] sm:h-[38px] w-full text-center flex justify-center items-center bg-black text-white">
        {" "}
        <p className="font-satoshi font-normal text-[12px] sm:text-[14px] ">
          Sign up and get 20% off to your first order.{" "}
          <span className="underline font-medium cursor-pointer">
            {" "}
            Sign Up Now
          </span>{" "}
        </p>
        <img
          src={close}
          alt="close icon"
          width={20}
          height={20}
          className="hidden sm:block absolute right-[100px] cursor-pointer"
        />
      </div>
    </section>
  );
};

export default TopBar;
