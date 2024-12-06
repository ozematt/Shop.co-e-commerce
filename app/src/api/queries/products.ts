import { PRODUCTS } from "../constants";
import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  images: z.array(z.string()),
  rating: z.number(),
  category: z.string(),
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

const fetchProducts = async () => {
  try {
    const response = await fetch(
      `${PRODUCTS}?limit=0&&select=id,title,price,rating,category,images,thumbnail,discountPercentage,`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products: unknown = await response.json();
    const validateProducts = productsFetchedDataSchema.safeParse(products);

    if (!validateProducts.success) {
      console.error("Validation error:", validateProducts.error);
      throw new Error("Validation failed: " + validateProducts.error);
    }
    const validProducts: ProductsFetchedData = validateProducts.data;
    return validProducts;
  } catch (error) {
    console.error("There has been a problem with fetch", error);
    throw error;
  }
};

export default fetchProducts;
