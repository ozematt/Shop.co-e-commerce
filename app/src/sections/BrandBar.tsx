import { brands } from "../constants";

const BrandBar = () => {
  return (
    <section className="px-4 sm:px-[100px] bg-black h-[122px] flex justify-center items-center gap-10 ">
      {brands.map((brand) => (
        <img
          src={brand.img}
          alt={brand.name}
          key={brand.name}
          className="grayscale contrast-200 filter invert w-[15%] h-[50%] aspect-[3/2] object-contain max-[974px]:last:hidden max-md:first:hidden"
        />
      ))}
    </section>
  );
};

export default BrandBar;
