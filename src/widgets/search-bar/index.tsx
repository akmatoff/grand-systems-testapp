import { CiSearch } from "react-icons/ci";
import { debounce } from "lodash";
import { useSearchParams } from "react-router-dom";
import { ChangeEvent } from "react";

import styles from "./search-bar.module.scss";

interface Props {
  placeholder: string;
}

export default function SearchBar({ placeholder }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchDebounced = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    const newParams = new URLSearchParams(searchParams);

    if (!text.length) {
      newParams.delete("search");
    } else {
      newParams.set("search", text);
    }

    setSearchParams(newParams);
  }, 300);

  return (
    <div className={styles["search-bar"]}>
      <CiSearch className={styles["search-icon"]} />

      <input
        defaultValue={searchParams.get("search") ?? ""}
        className={styles["search-input"]}
        placeholder={placeholder}
        onChange={handleSearchDebounced}
      />
    </div>
  );
}
