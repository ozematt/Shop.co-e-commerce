import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="ring-3 h-[270px] w-[500px] rounded-xl bg-white">
      <div className="flex flex-col px-4 py-9">
        <h6 className="text-center font-integralCFBold text-4xl">Success!</h6>
        <p className="pt-3 text-center font-satoshi text-lg">
          Thank you for your purchase! Your order has been successfully placed.
          You will be redirected to the homepage shortly.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mx-auto my-3 rounded-full bg-black px-[60px] py-3 font-satoshi text-white hover:scale-90 active:scale-100"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Success;
