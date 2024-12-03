import email from "../assets/Envelope.png";
import lock from "../assets/Lock.png";

const SignUp = () => {
  return (
    <section className="px-4 sm:px-[100px] max-container bg-grayBG flex flex-col items-center">
      <div>
        <h2 className="font-integralCFBold text-[32px] sm:text-5xl pt-[100px]">
          make your account
        </h2>
        <div className="py-[80px] space-y-4  w-full max-w-[400px]">
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
          <button className="max-sm:w-full px-[67px] py-[15px] bg-black rounded-full text-white mt-6 sm:mt-[32px] hover:scale-105">
            SignUp
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
