import beauty from "../assets/Beauty.png";
import clothes from "../assets/Clothes.png";
import electronics from "../assets/Electronics.png";
import kitchen from "../assets/Kitchen.png";

const Category = () => {
  return (
    <section className="px-4 sm:px-[100px] mt-[80px]">
      <div className=" rounded-[40px] bg-grayBG z-[1]">
        <h2 className="font-integralCFBold text-[32px] leading-9 sm:text-5xl text-center pt-[40px] sm:pt-[70px] pb-[24px] sm:pb-[64px]">
          browse by category
        </h2>
        <div className="px-[24px] sm:px-[64px] space-y-4">
          <div className="flex max-xl:flex-wrap gap-4">
            <div className=" bg-white flex-auto  w-[407px] h-[190px] md:h-[289px] rounded-[20px] overflow-hidden relative hover:scale-95 transition ease-in-out duration-200">
              <p className="font-satoshi font-bold text-2xl md:text-[36px] pt-[25px] pl-[36px]">
                Beauty
              </p>
              <img
                src={beauty}
                alt="cosmetics"
                width={300}
                className="absolute w-full h-full object-contain top-0 right-[-50px]"
              />
            </div>

            <div className=" bg-white flex-auto w-[684px] h-[190px] md:h-[289px] rounded-[20px] overflow-hidden relative hover:scale-95 transition ease-in-out duration-200">
              <p className="font-satoshi font-bold text-2xl md:text-[36px] pt-[25px] pl-[36px] z-[1]">
                Clothes
              </p>
              <img
                src={clothes}
                alt="clothes"
                width={450}
                className="absolute w-full h-full object-contain top-0 right-[-50px]"
              />
            </div>
          </div>
          <div className="flex max-xl:flex-wrap gap-4 pb-[74px]">
            <div className="bg-white flex-auto w-[684px] h-[190px] md:h-[289px] rounded-[20px] overflow-hidden relative hover:scale-95 transition ease-in-out duration-200">
              <p className="font-satoshi font-bold text-2xl md:text-[36px] pt-[25px] pl-[36px]">
                Kitchen
              </p>
              <img
                src={kitchen}
                alt="kitchen accessories"
                width={450}
                className="absolute w-full h-full object-contain top-0 right-[-50px]"
              />
            </div>
            <div className="bg-white flex-auto w-[407px] h-[190px] md:h-[289px] rounded-[20px] overflow-hidden relative hover:scale-95 transition ease-in-out duration-200">
              <p className="font-satoshi font-bold text-2xl md:text-[36px] pt-[25px] pl-[36px] ">
                Electronics
              </p>
              <img
                src={electronics}
                alt="electronics devices"
                className="absolute w-full h-full object-contain top-0 left-[100px] transform scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
