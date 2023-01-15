import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import styles from "./Search.module.scss";
const Search = () => {
  const inputSearch = () => {};

  return (
    <>
      <input
        className={`${styles.inputSearch} ${styles.hideSmall} ${styles.hideXsmall}`}
        type={"text"}
        placeholder={"جستجو..."}
        onClick={inputSearch}
      />
      <i className={`
      ${styles.icon}
      ${styles.hideSmall} 
      ${styles.hideXsmall}
      `}>
        <RiSearch2Line />
      </i>
    </>
  );
};

export default Search;
