import React, { useRef } from "react";
import { RiSearch2Line } from "react-icons/ri";
import styles from "./Search.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
const Search = () => {
  const router = useRouter();
  const search_text = useRef()
  const inputSearch = () => {
      router.push(`/search/${search_text.current.value}`);
    };
    const onEnterToSearch = (e)=>{
      if(e.key == "Enter"){
      router.push(`/search/${search_text.current.value}`);
    }
  }
  return (
    <>
      <input
        className={`${styles.inputSearch} ${styles.hideSmall} ${styles.hideXsmall}`}
        type={"text"}
        placeholder={"جستجو..."}
        ref={search_text}
        onKeyDown={onEnterToSearch}
      />
      <i
        className={`
      ${styles.icon}
      ${styles.hideSmall} 
      ${styles.hideXsmall}
      `}
      >
        <RiSearch2Line onClick={inputSearch}/>
      </i>
    </>
  );
};

export default Search;
