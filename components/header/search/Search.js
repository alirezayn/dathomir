import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import styles from "./Search.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
const Search = () => {
  const router = useRouter();
  const inputSearch = (e) => {
    if (e.key === "Enter") {
      router.push(`search/${e.target.value}`);
    }
  };

  return (
    <>
      <input
        className={`${styles.inputSearch} ${styles.hideSmall} ${styles.hideXsmall}`}
        type={"text"}
        placeholder={"جستجو..."}
        onClick={inputSearch}
      />
      <i
        className={`
      ${styles.icon}
      ${styles.hideSmall} 
      ${styles.hideXsmall}
      `}
      >
        <RiSearch2Line />
      </i>
    </>
  );
};

export default Search;
