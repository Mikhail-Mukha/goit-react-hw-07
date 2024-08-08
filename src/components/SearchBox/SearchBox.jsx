import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filterNumber = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        className={s.searchInput}
        type="text"
        value={filterNumber}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
};

export default SearchBox;
