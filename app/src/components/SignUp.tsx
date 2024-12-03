import email from "../assets/Envelope.png";
import lock from "../assets/Lock.png";
import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Button from "./Button";

const SignUp = () => {
  return (
    <>
      <section className="px-4 sm:px-[100px] max-container bg-grayBG flex flex-col items-center">
        <div>
          <h2 className="font-integralCFBold text-[32px] sm:text-5xl pt-[60px] sm:pt-[100px] max-sm:leading-9">
            make your account
          </h2>
          <div className="py-9 sm:py-[80px] space-y-4  w-full max-w-[400px]">
            <div className="relative w-full">
              <img
                src={email}
                alt="envelope"
                width={20}
                height={20}
                className="absolute top-[30%] left-6 opacity-60"
              />
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full h-[48px] pl-[60px] max-sm:placeholder:text-[14px] bg-white rounded-full"
              />
            </div>

            <div className="relative w-full">
              <img
                src={lock}
                alt="lock"
                width={20}
                height={20}
                className="absolute top-[25%] left-6 opacity-60"
              />
              <input
                type="text"
                placeholder="Enter your password"
                className=" w-full h-[48px] pl-[60px] max-sm:placeholder:text-[14px] bg-white rounded-full"
              />
            </div>
            <Button>Sign up</Button>
          </div>
        </div>
      </section>
      <div className="max-container">
        {" "}
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
