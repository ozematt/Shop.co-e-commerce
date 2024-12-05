import { PRODUCTS } from "../constants";
import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  images: z.array(z.string()),
  rating: z.number(),
  thumbnail: z.string(),
  discountPercentage: z.number(),
});

const productsFetchedDataSchema = z.object({
  products: z.array(productSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export type ProductsFetchedData = z.infer<typeof productsFetchedDataSchema>;

const fetchProducts = async (page: number): Promise<ProductsFetchedData> => {
  try {
    const response = await fetch(
      `${PRODUCTS}?limit=9&skip=${
        (page - 1) * 9
      }&select=id,title,price,rating,images,thumbnail,discountPercentage,`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    const validateProducts = productsFetchedDataSchema.safeParse(products);

    if (!validateProducts.success) {
      console.error("Validation error:", validateProducts.error);
      throw new Error("Validation failed: " + validateProducts.error);
    }
    return validateProducts.data;
  } catch (error) {
    console.error("There has been a problem with fetch", error);
    throw error;
  }
};

export default fetchProducts;
