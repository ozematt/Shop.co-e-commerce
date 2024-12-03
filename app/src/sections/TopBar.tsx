import { useState } from "react";
import close from "../assets/Close.png";
import { useNavigate } from "react-router";

const TopBar = () => {
  //
  //DATA
  const [hideBar, setHideBar] = useState(false);
  const navigate = useNavigate();

  ////LOGIC
  const handleSignUpClick = () => {
    navigate("/signup");
    setHideBar(true);
  };

  ////UI
  return (
    <>
      {!hideBar && (
        <section className="relative max-container">
          <div className="sm:px-[100px] h-[34px] sm:h-[38px] w-full text-center flex justify-center items-center bg-black text-white">
            {" "}
            <p className="font-satoshi font-normal text-[12px] sm:text-[14px] ">
              Sign up and get 20% off to your first order.{" "}
              <span
                className="underline font-medium cursor-pointer"
                onClick={handleSignUpClick}
              >
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
              onClick={() => setHideBar(!hideBar)}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default TopBar;
