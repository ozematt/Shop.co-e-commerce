// import { RootState } from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../redux/store";

const usePagedItems = () => {
  const [searchParams] = useSearchParams();
  //fetch page number from url (uploaded from Pagination component)
  const actualPage = Number(searchParams.get("page")) || 1; // when is NaN assigns 1 (NaN invalid string)
  const [page, setPage] = useState(Number(actualPage)); //selected page, local state

  //state of total items
  const total = useSelector(
    (state: RootState) =>
      state.products.filteredProductsByCategory?.total ??
      state.products.fetchedProducts.total,
  );

  //when url param change (updated in Pagination component), update local page state
  useEffect(() => {
    setPage(Number(actualPage));
  }, [actualPage]);

  //products indexes for displayed items
  const firstIndex = (page - 1) * 9;
  const secondIndex = total < 9 ? total : firstIndex + 9;

  return { page, total, firstIndex, secondIndex };
};

export default usePagedItems;
