import { useEffect, useState } from "react";
import { Footer, Newsletter } from "../sections";

import { Breadcrumbs } from "./";
import { UserAddress } from "../api/queries/user";

const Checkout = () => {
  const [userAddress, setUserAddress] = useState<UserAddress | null>(null);

  const authUserData = localStorage.getItem("user");

  useEffect(() => {
    if (authUserData) {
      const user = JSON.parse(authUserData);
      const userId = user.id;

      const authUserAddress: UserAddress = user.address;

      console.log(userId);

      setUserAddress(authUserAddress);
    }
  }, [authUserData]);

  // console.log(userAddress);

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
