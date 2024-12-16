import Details from "./Details";
import DetailsButton from "./DetailsButton";
import Comment from "./Comment";
import { useState } from "react";
import { Product } from "../api/queries/products";

const ProductInfo = ({
  brand,
  weight,
  dimensions,
  warrantyInformation,
  shippingInformation,
  reviews,
}: Product) => {
  //state to handle which details were about to show
  const [details, setDetails] = useState("Product");

  return (
    <section className="mt-[65px] w-full">
      {/* buttons */}

      <div className="">
        <DetailsButton
          onClick={() => setDetails("Product")}
          details={details}
          title={"Product"}
        >
          Product Details
        </DetailsButton>
        <DetailsButton
          onClick={() => setDetails("Reviews")}
          details={details}
          title={"Reviews"}
        >
          Rating & Reviews
        </DetailsButton>
      </div>

      <div className="my-8 font-satoshi">
        {details === "Product" ? (
          <Details
            brand={brand}
            weight={weight}
            dimensions={dimensions}
            warrantyInformation={warrantyInformation}
            shippingInformation={shippingInformation}
          />
        ) : (
          <div className="">
            <h4 className="font-satoshi text-2xl font-bold">All Reviews</h4>
            <div className="mt-[32px] flex gap-6">
              {reviews.map((comment) => (
                <Comment
                  key={comment.date}
                  rating={comment.rating}
                  name={comment.reviewerName}
                  text={comment.comment}
                  date={comment.date}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductInfo;
