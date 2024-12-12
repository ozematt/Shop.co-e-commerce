import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import tick from "../assets/Green tick.png";

type CommentProps = {
  rating: number;
  name: string;
  text: string;
};

const Comment = ({ rating, name, text }: CommentProps) => {
  return (
    <div className="w-[358px] z-10 h-[187px] sm:w-[400px] sm:h-[240px] rounded-[20px] ring-1 ring-black ring-opacity-10 p-6 sm:py-[28px] sm:px-[32px] flex-shrink-0">
      <Rating
        value={rating}
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0 }} />}
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
        }}
      />{" "}
      <div className="flex items-center gap-1 sm:pt-1 pb-1 sm:pb-[12px]">
        {" "}
        <p className="font-satoshi font-bold text-base sm:text-xl">{name}</p>
        <img src={tick} alt="green tick" width={24} height={24} />
      </div>
      <p className="font-satoshi max-sm:text-[14px] opacity-60">{text}</p>
    </div>
  );
};

export default Comment;
