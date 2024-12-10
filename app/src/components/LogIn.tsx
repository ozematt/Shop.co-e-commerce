import email from "../assets/Envelope.png";
import lock from "../assets/Lock.png";
import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Button from "./Button";
import Input from "./Input";

const LogIn = () => {
  //
  ////UI
  return (
    <>
      <section className="px-4 sm:px-[100px] max-container bg-grayBG">
        <div className="w-full max-w-[400px] flex flex-col mx-auto">
          <h2 className="font-integralCFBold text-[32px] sm:text-5xl pt-[60px] sm:pt-[100px] max-sm:leading-9">
            Welcome Back!
          </h2>

          <div className="pb-9 sm:pb-[80px] pt-8 space-y-4  w-full max-w-[400px]">
            <Input
              icon={email}
              alt="envelope"
              type="text"
              placeholder="Enter your email address"
            />
            <Input
              icon={lock}
              alt="lock"
              type="password"
              placeholder="Enter your password"
            />
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

export default LogIn;
