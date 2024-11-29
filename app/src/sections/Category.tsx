import beauty from "../assets/Beauty.png";
import clothes from "../assets/Clothes.png";
import electronics from "../assets/Electronics.png";
import kitchen from "../assets/Kitchen.png";

const Category = () => {
  return (
    <section className="px-4 sm:px-[100px] mt-[80px]">
      <div className=" rounded-[40px] bg-grayBG z-[1]">
        <h2 className="font-integralCFBold text-[32px] sm:text-5xl text-center pt-[70px] pb-[64px]">
          browse by category
        </h2>
        <div className="px-[64px] space-y-4">
          <div className="flex max-xl:flex-wrap gap-4">
            <div className=" bg-white flex-auto w-[407px] h-[190px] sm:h-[289px] rounded-[20px] overflow-hidden relative">
              <p className="font-satoshi font-bold text-[36px] pt-[25px] pl-[36px]">
                Beauty
              </p>
              <img
                src={beauty}
                alt="cosmetics"
                width={400}
                className="absolute top-0 right-[-70px]"
              />
            </div>

            <div className=" bg-white flex-auto w-[684px] h-[190px] sm:h-[289px] rounded-[20px] overflow-hidden relative">
              <p className="font-satoshi font-bold text-[36px] pt-[25px] pl-[36px] z-[1]">
                Clothes
              </p>
              <img
                src={clothes}
                alt="clothes"
                width={450}
                className="absolute min-w-[450px] top-[-35px] right-[-20px] z-[0]"
              />
            </div>
          </div>
          <div className="flex max-xl:flex-wrap gap-4 pb-[74px]">
            <div className="bg-white flex-auto w-[684px] h-[190px] sm:h-[289px] rounded-[20px] overflow-hidden relative">
              <p className="font-satoshi font-bold text-[36px] pt-[25px] pl-[36px]">
                Kitchen
              </p>
              <img
                src={kitchen}
                alt="kitchen accessories"
                width={450}
                className="absolute min-w-[450px] top-0 right-[-10px]"
              />
            </div>
            <div className="bg-white flex-shrink-0 flex-auto w-[407px] h-[190px] sm:h-[289px] rounded-[20px] overflow-hidden relative ">
              <p className="font-satoshi font-bold text-[36px] pt-[25px] pl-[36px] ">
                Electronics
              </p>
              <img
                src={electronics}
                alt="electronics devices"
                width={270}
                className="absolute top-[-60px] right-[-40px] transform scale-x-[-1] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
