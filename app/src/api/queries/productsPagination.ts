import { PRODUCTS } from "../constants";

const fetchProductsPage = async (page: number) => {
  console.log(page);

  try {
    const response = await fetch(
      `${PRODUCTS}?limit=9&skip=${
        page * 9 - 9
      }&select=title,price,rating,images,thumbnail,`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("There has been a problem with fetch", error);
    throw error;
  }
};

export default fetchProductsPage;
