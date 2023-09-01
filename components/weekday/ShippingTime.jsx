import { submitShippingTime } from "@/redux/features/OrderReducer";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./shippingTime.module.scss";
import Head from "next/head";

const ShippingTime = () => {
  const dispatch = useDispatch();
  let date = new Date();
  let calendar = [];
  for (let index = 0; index <= 7; index++) {
    calendar.push(date.setDate(date.getDate() + 1));
  }
  const newCalendar = calendar.map((item) =>
    new Date(item).toLocaleDateString("fa-IR", {
      day: "numeric",
      weekday: "long",
      month: "numeric",
    })
  );
  const shippingTimehandler = (e) => {
    dispatch(submitShippingTime(e.target.value));
  };
  return (
    <>
      <Head>
        <title>خرید کالا</title>
      </Head>
      <div className={`${styles.mainContainer}`}>
        {newCalendar.map((item, index) => {
          return (
            <div key={index} className={`${styles.dateBox}`}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: `${item.includes("جمعه") ? "red" : null}`,
                  opacity: `${item.includes("جمعه") ? ".6" : null}`,
                }}
              >
                {item}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  name="shippingTime"
                  value={item}
                  onClick={shippingTimehandler}
                  disabled={item.includes("جمعه") ? true : false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ShippingTime;
