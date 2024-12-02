import { Rating, useMediaQuery } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { comments } from "../constants";
import tick from "../assets/Green tick.png";
import { useState } from "react";
import arrowRight from "../assets/Arrow-right.png";
import arrowLeft from "../assets/Arrow-left.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const smallDevices = useMediaQuery("(max-width:640px)");

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < comments.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <section className="px-4 sm:px-[100px] relative overflow-hidden">
        <div className="flex items-end justify-between pt-[80px] pb-[40px]">
          {" "}
          <h2 className=" font-integralCFBold text-[32px] sm:text-5xl max-sm:leading-9">
            Our happy customers
          </h2>
          <div className="flex-shrink-0">
            {" "}
            <button onClick={handlePrev}>
              <img src={arrowLeft} alt="" width={24} height={24} />
            </button>
            <button className="pl-4" onClick={handleNext}>
              <img src={arrowRight} alt="" width={24} height={24} />
            </button>
          </div>
        </div>

        <div
          className="flex gap-1 sm:gap-5 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${
              currentIndex * (smallDevices ? 362 : 420)
            }px)`,
          }}
        >
          {comments.map((comment, index) => (
            <div
              key={index}
              className="w-[358px] z-10 h-[187px] sm:w-[400px] sm:h-[240px] rounded-[20px] ring-1 ring-black ring-opacity-10 p-6 sm:py-[28px] sm:px-[32px] flex-shrink-0"
            >
              <Rating
                value={comment.rating}
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0 }} />}
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                }}
              />{" "}
              <div className="flex items-center gap-1 sm:pt-1 pb-1 sm:pb-[12px]">
                {" "}
                <p className="font-satoshi font-bold text-base sm:text-xl">
                  {comment.name}
                </p>
                <img src={tick} alt="green tick" width={24} height={24} />
              </div>
              <p className="font-satoshi max-sm:text-[14px] opacity-60">
                {comment.text}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 sm:w-[100px] h-full  backdrop-blur-[2px]"></div>
        <div className="absolute top-0 right-0 sm:w-[100px] h-full  backdrop-blur-[2px] "></div>
      </section>
    </>
  );
};

export default Testimonials;
