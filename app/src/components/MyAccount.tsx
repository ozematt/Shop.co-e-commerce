import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";

const MyAccount = () => {
  return (
    <>
      <section className="max-container flex gap-6 px-4 sm:px-[100px]">
        <div className="flex h-[400px] w-[400px] flex-col items-center rounded-3xl py-7 ring-1">
          <div className="h-[200px] w-[200px] rounded-full ring-1" />

          <p className="mt-2 font-satoshi text-lg font-medium opacity-60">
            Username
          </p>
          <div className="ml-[-50px] mt-2 space-y-1">
            {" "}
            <p className="font-satoshi font-medium opacity-60">Name:</p>
            <p className="font-satoshi font-medium opacity-60">Surname:</p>
            <p className="font-satoshi font-medium opacity-60">Age:</p>
          </div>
        </div>
        <div className="h-[400px] w-full rounded-3xl px-6 py-7 ring-1">
          <h6 className="font-integralCFBold text-3xl">Purchase History</h6>
          <div className="border-b-2 py-2" />
          <p className="py-2 font-satoshi opacity-60">Date: 20.20.2020</p>
          <p className="font-satoshi text-3xl font-bold">Total: 300$</p>
          <div className="border-b-2 py-2" />
        </div>
      </section>{" "}
      <div className="max-container">
        {" "}
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default MyAccount;
