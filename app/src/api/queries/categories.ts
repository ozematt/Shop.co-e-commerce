import { CATEGORIES } from "../constants";
import { z } from "zod";

const fetchCategories = async () => {
  try {
    const response = await fetch(CATEGORIES);
    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There has been problem with fetch", error);
  }
};

export default fetchCategories;
