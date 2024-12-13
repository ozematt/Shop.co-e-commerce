type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type DetailsProps = {
  brand?: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
};

const Details = ({
  brand,
  weight,
  dimensions,
  warrantyInformation,
  shippingInformation,
}: DetailsProps) => {
  return (
    <div className="space-y-3 text-xl opacity-60">
      <p className="">
        {" "}
        Brand: <strong>{brand}</strong>{" "}
      </p>
      <p className="">
        {" "}
        Weight: <strong>{weight}</strong>
      </p>
      <ul className="list-disc space-y-2">
        {" "}
        Dimensions:
        <li className="ml-5">
          Width: <strong>{dimensions.width}</strong>
        </li>
        <li className="ml-5">
          Height: <strong>{dimensions.height}</strong>
        </li>
        <li className="ml-5">
          Depth: <strong>{dimensions.depth}</strong>
        </li>
      </ul>
      <p>
        Warranty: <strong>{warrantyInformation}</strong>
      </p>
      <p>
        Shipping information: <strong>{shippingInformation}</strong>
      </p>
    </div>
  );
};

export default Details;
