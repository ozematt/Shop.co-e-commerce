import { useEffect, useState } from "react";
import { Footer, Newsletter } from "../sections";

import { Breadcrumbs } from "./";
import fetchUserData, { UserAddress } from "../api/queries/user";
import { useMutation } from "@tanstack/react-query";

const Checkout = () => {
  //
  ////DATA
  const [userAddress, setUserAddress] = useState<UserAddress | null>(null);

  console.log(userAddress);

  const authUserData = localStorage.getItem("user");

  ////LOGIC
  const mutation = useMutation({
    mutationFn: fetchUserData,
    onError: () => {
      console.log("Cannot fetch user data");
    },
    onSuccess: (data) => {
      const userAddress = data.address;
      setUserAddress(userAddress);
    },
  });

  useEffect(() => {
    if (authUserData) {
      const user = JSON.parse(authUserData);
      const userId = user.id;
      mutation.mutate(userId);
    }
  }, [authUserData]);

  ////UI
  return (
    <>
      <section className="max-container px-4 sm:px-[100px]">
        {" "}
        <Breadcrumbs />
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
