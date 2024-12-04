import { PRODUCTS } from "../constants";
import { z } from "zod";

const dimensionsSchema = z.object({
  width: z.number(),
  height: z.number(),
  depth: z.number(),
});

const reviewSchema = z.object({
  rating: z.number().min(0).max(5),
  comment: z.string(),
  date: z.string(), // Można użyć .refine() do walidacji ISO daty
  reviewerName: z.string(),
  reviewerEmail: z.string().email(),
});

const metaSchema = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  barcode: z.string(),
  qrCode: z.string(),
});

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number().min(0),
  discountPercentage: z.number().min(0).max(100),
  rating: z.number().min(0).max(5),
  stock: z.number().min(0),
  tags: z.array(z.string()),
  brand: z.string().optional(),
  sku: z.string(),
  weight: z.number().min(0),
  dimensions: dimensionsSchema,
  warrantyInformation: z.string(),
  shippingInformation: z.string(),
  availabilityStatus: z.string(),
  reviews: z.array(reviewSchema),
  returnPolicy: z.string(),
  minimumOrderQuantity: z.number().min(1),
  meta: metaSchema,
  images: z.array(z.string().url()),
  thumbnail: z.string().url(),
});
const productsFetchedData = z.object({
  products: z.array(productSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

const fetchProducts = async () => {
  try {
    const response = await fetch(PRODUCTS);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const products = await response.json();
    const validateProducts = productsFetchedData.safeParse(products);

    if (!validateProducts.success) {
      throw new Error("Validation failed: " + validateProducts.error);
    }
    const validData = validateProducts.data;
    console.log(validData);
    return validData;
  } catch (error) {
    console.error("There has been a problem with fetch", error);
    throw error;
  }
};

export default fetchProducts;
