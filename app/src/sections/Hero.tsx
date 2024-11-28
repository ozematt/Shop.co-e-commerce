import { stats } from "../constants";

const Hero = () => {
  return (
    <section className="px-[100px] bg-grayBG h-[663px]">
      <div className="w-full max-w-[560px] pt-[103px]">
        {" "}
        <h1 className="font-integralCFBold text-[64px] leading-[64px]">
          Find clothes thet matches your style
        </h1>
        <p className="font-satoshi text-base mt-[32px] opacity-60">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="px-[67px] py-[15px] bg-black rounded-full text-white mt-[32px]">
          Shop Now
        </button>
      </div>

      <div className="flex mt-[48px] gap-10">
        {stats.map((stat) => (
          <div key={stat.number} className="even:border-x-2 even:px-[32px]">
            <h4 className="font-satoshi font-bold text-[40px]">
              {stat.number}
            </h4>
            <p className="font-satoshi opacity-60">{stat.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
