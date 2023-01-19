import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
  useProducts,
} from "../../app/hooks/hooks";
import useChairsData from "../../app/hooks/useChairsData";
import RemoveIconBtn from "../../components/ui/button/removeIconBtn/RemoveIconBtn";
import { closeBackdrop } from "../backdrop/backdropSlice";
import { closeSearchModal } from "../searchModal/searchModalSlice";
import styles from "./Search.module.scss";
import {
  filterSearchData,
  searchInputValue,
  searchValueIsValid,
} from "./searchSlice";

const Search = () => {
  const search = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const { allChairsData } = useChairsData("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(searchInputValue(e.target.value));
  };

  useEffect(() => {
    dispatch(searchValueIsValid());
    if (search.value.length < 1 || !allChairsData) return;
    dispatch(
      filterSearchData(
        allChairsData.filter((item) =>
          item.productName
            .trim()
            .toLowerCase()
            .includes(search.value.toLowerCase().trim())
        )
      )
    );
  }, [search.value]);

  const closeSearchModalHandler = () => {
    dispatch(closeBackdrop());
    dispatch(closeSearchModal());
  };

  return (
    <>
      <div className={styles.searchNav}>
        <h3>Search CHOCO Store</h3>
        <RemoveIconBtn onClick={closeSearchModalHandler} />
      </div>
      <div className={styles.searchInput}>
        <input
          onChange={inputHandler}
          type="text"
          id="text"
          placeholder="SEARCH HERE"
        />
      </div>
    </>
  );
};

export default Search;
