import React, { useState } from "react";
import styles from "./FilterList.module.scss";
const FilterList = ({ searchFunc, func, category }) => {
  const [number, setNumber] = useState(0);
  const data = [
    {
      name: "گوشی موبایل",
      brand: [{ name: "اپل" }, { name: "شیائومی" }, { name: "سامسونگ" }],
    },
    {
      name: "تبلت",
      brand: [{ name: "اپل" }, { name: "سامسونگ" }],
    },
    {
      name: "لپ تاپ",
      brand: [
        { name: "اپل" },
        { name: "ایسوس" },
        { name: "لنوو" },
        { name: "ایسر" },
      ],
    },
    {
      name: "دوربین دیجیتال",
      brand: [
        { name: "اپل" },
        { name: "ایسوس" },
        { name: "لنوو" },
        { name: "ایسر" },
      ],
    },
  ];


    // setNumber(e.target.value);
  
  let checkItems = data
    .filter((item) => item.name == category)
    .map((item) => item.brand);
  return (
    <div className={`${styles.mainFilter}`}>
      <input
        type="text"
        onKeyDown={searchFunc}
        className={styles.inputSearch}
        placeholder="جستجو ... "
      />
      <span>برند</span>
      <ul>
        {checkItems[0].map((item, index) => {
          return (
            <li key={index + 1}>
              <input type="checkbox" name={item.name} onChange={func} />
              {item.name}
            </li>
          );
        })}
      </ul>
     
      <hr />
    </div>
  );
};

export default FilterList;
