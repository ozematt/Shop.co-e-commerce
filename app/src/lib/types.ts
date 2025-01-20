import { z } from "zod";
import { cartItemSchema } from "../redux/cartSlice";

//// BUTTON TYPES
export type ButtonProps = {
  children: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

//// CHECKOUT TYPES
const itemSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string().url(),
  price: z.number(),
  quantity: z.number(),
});

export const orderDataSchema = z.object({
  id: z.string(),
  date: z.string(),
  total: z.number(),
  items: z.array(itemSchema),
});

export type OrderData = z.infer<typeof orderDataSchema>;

export const cartLocalStorageSchema = z.object({
  entities: z.record(cartItemSchema),
  ids: z.array(z.number()),
  itemsInCart: z.number(),
  subtotal: z.number(),
  total: z.number(),
});

export const userLocalStorageSchema = z.object({
  id: z.number(),
  username: z.string(),
});
export type UserLocalStorage = z.infer<typeof userLocalStorageSchema>;

//// COMMENT TYPES
export type CommentProps = {
  rating: number;
  name: string;
  text: string;
  date?: string;
};

//// DETAILS TYPES
type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

export type DetailsProps = {
  brand?: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
};

//// DETAILS BUTTON TYPES
export type DetailsButtonProps = {
  onClick: () => void;
  details: string;
  children: string;
  title: string;
};

////FILTERS TYPES
export type FiltersProps = {
  iconHide?: boolean;
  sortOptions?: boolean;
  close?: () => void;
};

////INPUT TYPES
export type InputProps = {
  icon: string;
  alt: string;
  type: string;
  placeholder: string;
};
