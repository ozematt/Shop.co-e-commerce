import email from "../assets/Envelope.png";
import lock from "../assets/Lock.png";
import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Button from "./Button";
import Input from "./Input";

const SignUp = () => {
  return (
    <>
      <section className="px-4 sm:px-[100px] max-container bg-grayBG flex flex-col items-center">
        <div>
          <h2 className="font-integralCFBold text-[32px] sm:text-5xl pt-[60px] sm:pt-[100px] max-sm:leading-9">
            make your account
          </h2>

          <div className="py-9 sm:py-[80px] space-y-4  w-full max-w-[400px]">
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

export default SignUp;
