import Input from "../components/Input";
import email from "../assets/Envelope.png";

const Newsletter = () => {
  return (
    <section className="px-4 sm:px-[80px] mt-[80px] relative">
      <div className="flex justify-center min-[1345px]:justify-between items-center flex-wrap w-full max-w-[1280px] bg-black rounded-[20px]">
        <h2 className="font-integralCFBold  text-white text-[32px] sm:text-[40px] py-[32px] sm:py-[43px] px-[36px] sm:px-[64px] w-full max-w-[690px] leading-[45px]">
          Stay upto date about our latest offers
        </h2>
        <div className="flex flex-col pb-[28px] sm:py-[43px] px-3 sm:px-[64px]">
          <Input
            icon={email}
            alt="envelope"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="mt-[14px] text-black max-sm:text-[14px] bg-white py-[12px] px-[80px] sm:px-[89px] rounded-full flex-shrink-0 hover:scale-95 transition ease-in-out duration-200">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className="bg-grayBG absolute z-[-1] h-[50%] w-full bottom-0 left-0" />
    </section>
  );
};

export default Newsletter;
