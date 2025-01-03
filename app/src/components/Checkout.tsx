import { useEffect, useId, useState } from "react";
import { Footer, Newsletter } from "../sections";
import { Breadcrumbs } from "./";
import fetchUserData, { type UserAddress } from "../api/queries/user";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { format } from "date-fns";
import { CartProduct } from "../redux/cartSlice";
import { z } from "zod";

type UserData = {
  name: string;
  surname: string;
  address: UserAddress;
};

type Item = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

export type OrderData = {
  id: string;
  date: string;
  total: number;
  items: Item[];
};

const entitySchema = z.object({
  id: z.number(),
  title: z.string(),
  category: z.string(),
  discountPercentage: z.number(),
  image: z.string().url(),
  price: z.number(),
  purchaseTotal: z.number(),
  quantity: z.number(),
  shippingTime: z.string(),
  stock: z.number(),
});

const cartLocalStorageSchema = z.object({
  entities: z.record(entitySchema), // Klucz obiektowy mapowany na `entitySchema`
  ids: z.array(z.number()), // Lista identyfikatorów (np. `137`)
  itemsInCart: z.number(), // Ilość elementów w koszyku
  subtotal: z.number(), // Koszt produktów
  total: z.number(), // Łączna kwota (z kosztami wysyłki, rabatami itp.)
});

const Checkout = () => {
  //
  ////DATA
  const [userData, setUserData] = useState<UserData | null>(null);

  const [order, setOrder] = useState<OrderData | null>(null);
  console.log(order);

  const total = useSelector((state: RootState) => state.cart.total); //total price (included discount)

  ////LOGIC
  useEffect(() => {
    const rawCart = JSON.parse(localStorage.getItem("cart") || "{}");
    const parsedCart = cartLocalStorageSchema.safeParse(rawCart);

    if (parsedCart.success) {
      const cartItems = parsedCart.data.entities;

      let itemsArray = [];
      //extracting items array from cart object
      for (let key in cartItems) {
        itemsArray.push(cartItems[key]);
      }
      // creating order object
      const order: OrderData = {
        id: orderId,
        items: itemsArray.map((item: CartProduct) => ({
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),
        date: formatDate(),
        total: parsedCart.data.total,
      };

      setOrder(order);
    } else {
      console.error("Invalid users data in localStorage", parsedCart.error);
      setOrder(null);
    }
  }, []);

  const mutation = useMutation({
    mutationFn: fetchUserData, //
    onError: () => {
      console.log("Cannot fetch user data");
    },
    onSuccess: (data) => {
      //create user data
      const userAddress = {
        name: data.firstName,
        surname: data.lastName,
        address: data.address,
      };
      setUserData(userAddress); //add user data to state
    },
  });

  useEffect(() => {
    const authUserData = localStorage.getItem("user");
    if (authUserData) {
      const user = JSON.parse(authUserData);
      const userId = user.id;
      mutation.mutate(userId);
    }
  }, []);

  // date-fns
  const formatDate = () => {
    const today = new Date();
    return format(today, "dd.MM.yyyy");
  };

  // unique id
  const orderId = useId();

  const handleOrder = () => {};

  ////UI
  return (
    <>
      <section className="max-container px-4 sm:px-[100px]">
        {" "}
        <Breadcrumbs />
        <div>
          <h2 className="mt-[8px] font-integralCFBold text-[32px] max-md:leading-[36px] sm:mt-[24px] sm:text-5xl">
            Finalization
          </h2>
          <div className="mt-[20px] flex flex-wrap justify-center gap-[20px] sm:mt-[24px]">
            <div className="h-full max-h-[505px] w-full rounded-[20px] ring-1 ring-black ring-opacity-10 min-[1454px]:max-w-[715px]">
              <div className="px-6 pb-[33px] pt-[20px]">
                <h6 className="pb-1 font-satoshi text-xl font-bold sm:text-2xl">
                  Shipping recipient details:
                </h6>
                <div className="border-b-[1px] pt-5" />
                {/* Address */}
                <div className="mt-4 space-y-1 font-satoshi text-sm">
                  <p className="pb-1 text-xl font-bold">{` ${userData?.name}  ${userData?.surname}`}</p>
                  <p>
                    <span className="font-medium">City:</span>{" "}
                    {userData?.address?.city}
                  </p>
                  <p>
                    <span className="font-medium">Address:</span>{" "}
                    {userData?.address?.address}
                  </p>
                  <p>
                    <span className="font-medium">Postal Code:</span>{" "}
                    {userData?.address?.postalCode}
                  </p>
                  <p>
                    <span className="font-medium">Country:</span>{" "}
                    {userData?.address?.country}
                  </p>
                  <p>
                    <span className="font-medium">State:</span>{" "}
                    {userData?.address?.state}
                  </p>
                </div>
              </div>
            </div>
            {/* SUMMARY */}
            <div className="w-full max-w-[805px] rounded-[20px] ring-1 ring-black ring-opacity-10 min-[1454px]:max-w-[505px]">
              <div className="px-6 pb-[33px] pt-[20px]">
                <h6 className="pb-1 font-satoshi text-xl font-bold sm:text-2xl">
                  Total Payable Amount
                </h6>
                <div>
                  <div className="flex justify-between pt-5">
                    <p className="font-satoshi text-base opacity-60 sm:text-xl">
                      Total Price{" "}
                    </p>{" "}
                    <p className="font-satoshi text-base font-bold sm:text-xl">
                      ${total}
                    </p>
                  </div>
                  <div className="border-b-[1px] pt-5" />

                  <button className="relative mt-6 w-full max-w-[457px] rounded-full bg-black py-[19px] font-satoshi font-medium text-white transition duration-100 ease-in-out hover:scale-95 max-sm:text-sm">
                    PAY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-container">
        {" "}
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
