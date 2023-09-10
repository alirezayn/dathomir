import React, { useState } from "react";
import styles from "./FilterList.module.scss";
import { BsArrowLeftShort } from "react-icons/bs";
const FilterList = ({ checkModel,checkCapacity, category, show, hide }) => {
  
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
        { name: "نیکون" },
        { name: "سونی" },
        { name: "کنون" },
      ],
    },
  ]
  const storage = [
    {capacity:'32'},
    {capacity:'64'},
    {capacity:'128'},
    {capacity:'256'},
  ]
  let checkItems = data
    .filter((item) => item.name == category)
    .map((item) => item.brand);
  return (
    <div className={`${styles.mainFilter} ${show ? styles.show : styles.hide}`}>
      <button className={`${styles.hideFilter}`} onClick={hide}><BsArrowLeftShort /></button>
      <span>برند</span>
      <ul>
        {checkItems[0].map((item, index) => {
          return (
            <li key={index + 1}>
              <input type="checkbox" name={item.name} onChange={checkModel} />
              {item.name}
            </li>
          );
        })}
      </ul>
     
      <hr />
        <ul>
        <span>ظرفیت</span>
      {storage.map((item,index)=>{
        return(
          <li key={index + 1}>
            <input type="checkbox" name={item.capacity} onChange={checkCapacity}/>
            {item.capacity}
          </li>
          )
        })}
        </ul>
    </div>
  );
};

export default FilterList;
