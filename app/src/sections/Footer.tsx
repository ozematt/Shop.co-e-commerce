import { footerData, socials } from "../constants";
import pay from "../assets/Pay.png";

const Footer = () => {
  return (
    <section className="px-4 sm:px-[80px] mt-[50px] relative">
      <div className="flex">
        {" "}
        <div>
          <h3 className="font-integralCFBold text-[34px] leading-[28px]">
            Shop.co
          </h3>
          <p className="font-satoshi text-[14px] opacity-60 w-full max-w-[248px] mt-[25px]">
            We offer products that match your style and make you proud — for
            everyone, everywhere.
          </p>
          <div className="flex gap-3 mt-[35px]">
            {" "}
            {socials.map((social) => (
              <img src={social.iconIMG} alt={social.name} key={social.name} />
            ))}
          </div>
        </div>
        {footerData.map((item) => (
          <div key={item.title} className="pl-[110px]">
            <p className="font-satoshi font-medium uppercase tracking-[.35rem]">
              {item.title}
            </p>
            {item.items.map((element) => (
              <p key={element} className="pt-4 font-satoshi opacity-60">
                {element}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="border-b-2 mt-[50px]" />
      <div className="flex justify-between items-center">
        {" "}
        <p className="font-satoshi text-[14px] opacity-60 mt-[25px] mb-[88px]">
          Shop.co © 2000-2024, All Rights Reserved
        </p>
        <img src={pay} alt="payment method" />
      </div>
      <div className="bg-grayBG w-full max-w-[1440] h-[500px] absolute bottom-0 left-[-20px] z-[-1]" />
    </section>
  );
};

export default Footer;
