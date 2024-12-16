import { useEffect, useState } from "react";

type ProductImagesProps = {
  images: string[];
};

const ProductImages = ({ images }: ProductImagesProps) => {
  //
  ///DATA
  const [bigImg, setBigImg] = useState<string>("");

  ////LOGIC
  useEffect(() => {
    if (images) {
      setBigImg(images[0]);
      return;
    }
  }, [images]);

  ////UI
  return (
    <div className="flex w-full max-w-[610px] gap-[14px]">
      {" "}
      <div className="w-[152px] space-y-[14px]">
        {images.slice(0, 3).map((img) => (
          <img
            key={img}
            src={img}
            alt="image"
            width={152}
            height={167}
            onClick={() => setBigImg(img)}
            className="h-[167px] rounded-[20px] bg-grayBG object-contain ring-black hover:ring-1"
          />
        ))}
      </div>
      {/* main IMG */}
      <img
        src={bigImg}
        alt="main image"
        width={444}
        height={530}
        className="h-[530px] rounded-[20px] bg-grayBG object-contain"
      />
    </div>
  );
};

export default ProductImages;
