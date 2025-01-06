import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { type User } from "../api/queries/user";
import { fetchUserData } from "../api/queries";
import { Footer, Newsletter } from "../sections";
import { UserLocalStorage, userLocalStorageSchema } from "./Checkout";
import { z } from "zod";
import { orderDataSchema } from "./Checkout";

const ordersLocalStorageSchema = z.array(orderDataSchema);

type Orders = z.infer<typeof ordersLocalStorageSchema>;

const MyAccount = () => {
  //
  ////DATA
  const [userData, setUserData] = useState<User | null>(null);
  const [orders, setOrders] = useState<Orders>([]);

  ////LOGIC
  //handling responses from the server
  const mutation = useMutation({
    mutationFn: fetchUserData,
    onSuccess: (data) => {
      setUserData(data);
    },
  });

  useEffect(() => {
    //user id from local storage
    const rawAuthUserData = JSON.parse(localStorage.getItem("user") || "{}");
    const parsedUser = userLocalStorageSchema.safeParse(rawAuthUserData);

    if (parsedUser.success) {
      mutation.mutate(parsedUser.data.id);
    } else {
      console.error("Invalid users data in localStorage", parsedUser.error);
    }
  }, []);

  useEffect(() => {
    // orders from local storage
    const rawUserOrders = JSON.parse(localStorage.getItem("orders") || "[]");
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
                <div key={item.id} className="my-1 flex">
                  <img
                    src={item.image}
                    alt="product image"
                    className="w-[120px] rounded-md bg-grayBG"
                  />
                  <div className="ml-5 space-y-1">
                    <p className="font-satoshi text-xl font-semibold">
                      {item.title}
                    </p>
                    <p className="font-satoshi text-lg">
                      <span className="text-base">{item.quantity}x</span>{" "}
                      {item.price} $
                    </p>
                  </div>
                </div>
              ))}

              <p className="pt-5 font-satoshi text-3xl font-bold">
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
