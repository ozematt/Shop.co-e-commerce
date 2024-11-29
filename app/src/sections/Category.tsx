import beauty from "../assets/Beauty.png";
import clothes from "../assets/Clothes.png";
import electronics from "../assets/Electronics.png";
import kitchen from "../assets/Kitchen.png";

const Category = () => {
  return (
    <section className="px-4 sm:px-[100px] mt-[80px]">
      <div className=" rounded-[40px] bg-grayBG">
        <h2 className="font-integralCFBold text-5xl text-center pt-[70px] pb-[64px]">
          browse by category
        </h2>
        <div className="px-[64px] space-y-4">
          <div className="flex max-[1324px]:flex-wrap gap-4">
            <div className=" bg-white w-full max-w-[407px] h-[289px] rounded-[20px] overflow-hidden relative">
              <p className="font-satoshi font-bold text-[36px] pt-[25px] pl-[36px]">
                Beauty
              </p>
              <img
                src={beauty}
                alt="cosmetics"
                width={350}
                className="absolute top-[-100px] object-contain right-0"
              />
            </div>

            <div className=" bg-white w-full max-w-[684px] h-[289px] rounded-[20px] overflow-hidden relative">
              <p className="font-satoshi font-bold text-[36px] pt-[25px] pl-[36px]">
                Clothes
              </p>
              <img
                src={clothes}
                alt="clothes"
                width={650}
                className="absolute object-contain top-[-75px] min-w-[500px] right-[-120px]"
              />
            </div>
          </div>

          <div className="flex max-[1324px]:flex-wrap gap-4 pb-[74px]">
            <div className="bg-white w-full max-w-[684px] h-[289px] rounded-[20px] overflow-hidden relative">
              <p className="font-satoshi font-bold text-[36px] pt-[25px] pl-[36px]">
                Kitchen
              </p>
              <img
                src={kitchen}
                alt="kitchen accessories"
                width={600}
                height={300}
                className="absolute scale-75 top-[-100px] right-[-50px]"
              />
            </div>
            <div className="bg-white w-full max-w-[407px] h-[289px] rounded-[20px] overflow-hidden relative">
              <p className="font-satoshi font-bold text-[36px] pt-[25px] pl-[36px] ">
                Electronics
              </p>
              <img
                src={electronics}
                alt="electronics devices"
                className="absolute top-3 right-3 transform scale-x-[-1] max-h-[90%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
