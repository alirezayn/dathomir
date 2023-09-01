import React, { useState } from "react";
import styles from "./FilterList.module.scss";
const FilterList = ({ func, category }) => {
  
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
  ]

  let checkItems = data
    .filter((item) => item.name == category)
    .map((item) => item.brand);
  return (
    <div className={`${styles.mainFilter}`}>
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
