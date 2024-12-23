import { USERS } from "../constants";
import { z } from "zod";

const coordinatesSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});

const addressSchema = z.object({
  address: z.string(),
  city: z.string(),
  state: z.string(),
  stateCode: z.string(),
  postalCode: z.string(),
  coordinates: coordinatesSchema,
  country: z.string(),
});

const hairSchema = z.object({
  color: z.string(),
  type: z.string(),
});

const bankSchema = z.object({
  cardExpire: z.string(),
  cardNumber: z.string(),
  cardType: z.string(),
  currency: z.string(),
  iban: z.string(),
});

const companySchema = z.object({
  department: z.string(),
  name: z.string(),
  title: z.string(),
  address: addressSchema,
});

const cryptoSchema = z.object({
  coin: z.string(),
  wallet: z.string(),
  network: z.string(),
});

const userSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  maidenName: z.string(),
  age: z.number(),
  gender: z.enum(["male", "female", "other"]),
  email: z.string().email(),
  phone: z.string(),
  username: z.string(),
  password: z.string(),
  birthDate: z.string(),
  image: z.string().optional(),
  bloodGroup: z.string(),
  height: z.number(),
  weight: z.number(),
  eyeColor: z.string(),
  hair: hairSchema,
  ip: z.string(),
  address: addressSchema,
  macAddress: z.string(),
  university: z.string(),
  bank: bankSchema,
  company: companySchema,
  ein: z.string(),
  ssn: z.string(),
  userAgent: z.string(),
  crypto: cryptoSchema,
  role: z.enum(["admin", "moderator", "user"]),
});

export type User = z.infer<typeof userSchema>;

const fetchUserData = async (id: number) => {
  try {
    const response = await fetch(`${USERS}/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const user: unknown = await response.json();
    const validateUser = userSchema.safeParse(user);

    if (!validateUser.success) {
      console.error("Validation error:", validateUser.error);
      throw new Error("Validation failed: " + validateUser.error);
    }
    const validProducts: User = validateUser.data;
    return validProducts;
  } catch (error) {
    console.error("There has been a problem with fetch", error);
    throw error;
  }
};

export default fetchUserData;
