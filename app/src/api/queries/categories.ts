import { CATEGORIES } from "../constants";
import { z } from "zod";

const categorySchema = z.object({
  slug: z.string(),
  name: z.string(),
  url: z.string(),
});
const categoryArray = z.array(categorySchema);

type Category = z.infer<typeof categorySchema>;

const fetchCategories = async () => {
  try {
    const categories: unknown = await fetch(CATEGORIES);
    const validateCategories = categoryArray.safeParse(categories);
    if (!validateCategories.success) {
      throw new Error("Network response was not ok" + validateCategories.error);
    }
    const validData: Category[] = validateCategories.data;
    console.log(validData);
  } catch (error) {
    console.error("There has been problem with fetch", error);
  }
};

export default fetchCategories;
