const Newsletter = () => {
  return (
    <section className="px-4 sm:px-[80px] mt-[80px]">
      <div className="flex justify-center min-[1345px]:justify-between items-center flex-wrap w-full max-w-[1240px] bg-black rounded-[20px]">
        <h2 className="font-integralCFBold max-[1345px]:text-center text-white text-[40px] py-[43px] px-[64px] w-full max-w-[690px] leading-[45px]">
          Stay upto date about our latest offers
        </h2>
        <div className="flex flex-col py-[36px] px-[64px]">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full max-w-[350px] h-[48px] pl-[60px] bg-white rounded-full bg-email-icon bg-no-repeat bg-[center_left_1.5rem]"
          />
          <button className="mt-[14px] text-black bg-white py-[12px] px-[89px] rounded-full">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
