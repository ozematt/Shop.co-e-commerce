import { useQuery } from "@tanstack/react-query";
import fetchProducts, {
  type Product as ProductT,
  ProductsFetchedData,
} from "../api/queries/products";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import { useNavigate } from "react-router-dom";

const TopRating = () => {
  //
  ////DATA
  const navigate = useNavigate();

  const [productsToShow, setProductsToShow] = useState<ProductT[]>([]);

  // fetched products
  const { data, isPending } = useQuery<ProductsFetchedData>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  ////LOGIC
  //make four elements array
  useEffect(() => {
    if (productsToShow && data?.products && !isPending) {
      const products = data.products
        .filter((product) => product.rating >= 4.9)
        .slice(0, 4);
      setProductsToShow(products);
    }
  }, [data]);

  ////UI
  return (
    <section className="px-4 sm:px-[100px] mt-[72px] flex flex-col items-center">
      <h2 className="font-integralCFBold text-5xl text-center">Top Rating</h2>
      <div className="flex gap-5 mt-[55px]">
        {" "}
        {productsToShow?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      <button
        onClick={() => navigate("/shop")}
        className="cursor-pointer hover:scale-95 action:scale-100 px-[80px] py-[15px] border rounded-full  mt-[36px]"
      >
        View All
      </button>
    </section>
  );
};

export default TopRating;
