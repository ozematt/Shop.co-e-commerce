const NewArrivals = () => {
  return (
    <section className="px-4 sm:px-[100px] mt-[72px] flex flex-col items-center">
      <h2 className="font-integralCFBold text-5xl text-center">New arrivals</h2>
      <div>
        <img
          src=""
          alt=""
          className="ring-1 rounded-3xl mt-[55px]"
          width={295}
          height={298}
        />
        <p className="font-satoshi font-bold text-xl mt-4">Nazwa produktu</p>
        <p className="font-satoshi text-sm">ocena</p>
        <p className="font-satoshi font-bold text-2xl">cena</p>
      </div>
      <button className="px-[80px] py-[15px] border rounded-full  mt-[36px] mb-[64px]">
        View All
      </button>
      <div className="border-b w-full" />
    </section>
  );
};

export default NewArrivals;
