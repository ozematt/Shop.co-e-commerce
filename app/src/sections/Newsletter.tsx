const Newsletter = () => {
  return (
    <section className="px-4 sm:px-[80px] mt-[80px]">
      <div className="flex justify-center min-[1345px]:justify-between items-center flex-wrap w-full max-w-[1280px] bg-black rounded-[20px]">
        <h2 className="font-integralCFBold  text-white text-[32px] sm:text-[40px] py-[32px] sm:py-[43px] px-[36px] sm:px-[64px] w-full max-w-[690px] leading-[45px]">
          Stay upto date about our latest offers
        </h2>
        <div className="flex flex-col pb-[28px] sm:py-[43px] px-3 sm:px-[64px]">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full max-w-[350px] h-[48px] pl-[60px] max-sm:placeholder:text-[14px] bg-white rounded-full bg-email-icon bg-no-repeat bg-[center_left_1.5rem]"
          />
          <button className="mt-[14px] text-black max-sm:text-[14px] bg-white py-[12px] px-[80px] sm:px-[89px] rounded-full flex-shrink-0">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
