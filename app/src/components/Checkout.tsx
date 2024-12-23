import { useEffect, useState } from "react";
import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Breadcrumbs from "./Breadcrumbs";
import { UserAddress } from "../api/queries/user";

const Checkout = () => {
  // const [userAddress, setUserAddress] = useState<UserAddress | null>(null);

  // const authUserData = localStorage.getItem("user");

  // useEffect(() => {
  //   if (authUserData) {
  //     const user = JSON.parse(authUserData);
  //     const authUserAddress: UserAddress = user.address;
  //     setUserAddress(authUserAddress);
  //   }
  // }, [authUserData]);

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
