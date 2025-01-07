import { Fragment, useEffect, useState } from "react";
import { Footer, Newsletter } from "../sections";
import { z } from "zod";
import { orderDataSchema } from "./Checkout";
import { useUserData } from "../lib/hooks";

const ordersLocalStorageSchema = z.array(orderDataSchema);

type Orders = z.infer<typeof ordersLocalStorageSchema>;

const MyAccount = () => {
  //
  ////DATA
  const [orders, setOrders] = useState<Orders>([]);
  const { userData } = useUserData(); //custom hook

  ////LOGIC
  useEffect(() => {
    // orders from local storage
    const rawUserOrders: unknown = JSON.parse(
      localStorage.getItem("orders") || "[]",
    );
    const parsedOrders = ordersLocalStorageSchema.safeParse(rawUserOrders);

    if (parsedOrders.success) {
      setOrders(parsedOrders.data);
    } else {
      console.error("Invalid users data in localStorage", parsedOrders.error);
      setOrders([]);
    }
  }, []);

  ////UI
  return (
    <>
      <section className="max-container mt-3 flex gap-6 px-4 sm:px-[100px]">
        <div className="flex h-[400px] w-[400px] flex-col items-center rounded-[20px] py-7 ring-1 ring-black ring-opacity-10">
          <img
            src={userData?.image}
            alt=""
            className="h-[200px] w-[200px] rounded-full bg-grayBG object-contain"
          />

          <p className="mt-2 font-satoshi text-2xl font-medium opacity-60">
            {userData?.username}
          </p>
          <div className="ml-[-50px] mt-2 space-y-1">
            {" "}
            <p className="font-satoshi font-medium opacity-60">
              Name: {userData?.firstName}
            </p>
            <p className="font-satoshi font-medium opacity-60">
              Surname: {userData?.lastName}
            </p>
            <p className="font-satoshi font-medium opacity-60">
              Age: {userData?.age}
            </p>
          </div>
        </div>
        <div className="w-full rounded-[20px] px-9 py-7 ring-1 ring-black ring-opacity-10">
          <h6 className="font-integralCFBold text-4xl">Purchase History</h6>
          <div className="border-b-[1px] py-2" />

          {orders.map((order) => (
            <div key={order.id} className="my-1">
              <p className="py-2 pt-3 font-satoshi opacity-60">
                Date: {order.date}
              </p>
              {order.items.map((item) => (
                <Fragment key={item.id}>
                  <div key={item.id} className="my-1 flex">
                    <img
                      src={item.image}
                      alt="product image"
                      className="w-[140px] rounded-md bg-grayBG"
                    />
                    <div className="ml-5 space-y-1">
                      <p className="font-satoshi text-2xl font-semibold">
                        {item.title}
                      </p>
                      <p className="font-satoshi text-xl">
                        <span className="text-lg">{item.quantity} x</span>{" "}
                        {item.price} $
                      </p>
                    </div>
                  </div>
                  <div className="my-6 mr-[150px] border-b-[1px]" />
                </Fragment>
              ))}

              <p className="mt-[-10px] font-satoshi text-2xl font-bold">
                Total: {order.total}$
              </p>
              <div className="border-b-[1px] py-2" />
            </div>
          ))}
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
