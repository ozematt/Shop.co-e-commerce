import { stats } from "../constants";
import heroIMG from "../assets/hero_cart.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="px-4 sm:px-[100px] bg-grayBG relative">
      <div className="w-full max-w-[360px] max-sm:mx-auto sm:max-w-[520px] pt-10 sm:pt-[103px]">
        {" "}
        <h1 className="font-integralCFBold text-4xl sm:text-[64px] sm:leading-[64px]">
          Discover what makes your style truly yours
        </h1>
        <p className="font-satoshi  text-[14px] sm:text-base mt-[32px] opacity-60">
          Browse through our diverse range of meticulously crafted products,
          designed to highlight your individuality and meet your unique
          preferences.
        </p>
        <Button>Shop now</Button>
      </div>

      <div className="flex flex-wrap max-[833px]:justify-center py-[22px] sm:pt-[48px] gap-[27px] sm:gap-10 sm:pb-[116px]">
        {stats.map((stat) => (
          <div
            key={stat.number}
            className="min-[833px]:even:border-x-2 max-[833px]:even:border-l-2 max-sm:pl-[27px] sm:even:px-[32px] first:pl-0"
          >
            <h4 className="font-satoshi font-bold text-2xl sm:text-[40px]">
              {stat.number}
            </h4>
            <p className="font-satoshi max-sm:text-xs opacity-60 sm:pt-3">
              {stat.caption}
            </p>
          </div>
        ))}
        <img
          src={heroIMG}
          alt="hero img"
          width={670}
          height={670}
          className="hidden min-[1250px]:block absolute z-10 grayscale contrast-150 top-8 right-0"
        />
      </div>
    </section>
  );
};

export default Hero;
