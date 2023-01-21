import { useAppSelector } from "../../app/hooks/hooks";
import styles from "./SearchNoResultMes.module.scss";

const SearchNoResultMes = () => {
  const search = useAppSelector((state) => state.search);

  const noResult =
    search.value.length !== 0 && search.searchResult.length === 0;

  return (
    <div className={styles.messageContaiter}>
      {noResult && <h4>NO RESULT ... ( Try Model or Choco ) </h4>}
    </div>
  );
};

export default SearchNoResultMes;
