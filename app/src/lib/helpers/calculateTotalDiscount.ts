import { CartProduct } from "../../redux/cartSlice";

function calculateTotalDiscount(products: CartProduct[]) {
  let totalOriginalPrice = 0;
  let totalDiscountedPrice = 0;

  products.forEach(({ price, discountPercentage }) => {
    let discount = 0;
    if (discountPercentage >= 15 && discountPercentage <= 20) {
      discount = 20;
    }
    if (discountPercentage <= 10 && discountPercentage < 15) {
      discount = 10;
    }
    const discountedPrice = price * (1 - discount / 100);
    totalOriginalPrice += price;
    totalDiscountedPrice += discountedPrice;
  });

  const effectiveDiscount = (
    (1 - totalDiscountedPrice / totalOriginalPrice) *
    100
  ).toFixed(2);

  return {
    effectiveDiscount: effectiveDiscount,
  };
}

export default calculateTotalDiscount;
