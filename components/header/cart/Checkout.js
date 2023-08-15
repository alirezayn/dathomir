import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./checkout.module.scss";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  const getAmount = cart.reduce(
    (amount, item) => amount + item.quantity * item.price,
    // item.quantity * (item.discount == 0 ? item.price : item.discount),
    0
  );

  let getDiscount = cart.reduce(
    (amount, item) =>
      amount + item.quantity * (item.discount != 0 ? item.discount : null),
    0
  );
  getDiscount = getAmount - getDiscount;

  const getTotal = getAmount - getDiscount;

  const regex = new RegExp("^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$");

  const [show, setShow] = useState(false);

  const [wrongNumber, setWrongNumber] = useState(false);

  const [emptyNumber, setEmptyNumber] = useState(false);

  const handlePhoneNumber = () => {
    username.current.value.length == 0
      ? setEmptyNumber(true)
      : setEmptyNumber(false);
    username.current.value.length >= 12
      ? setWrongNumber(true)
      : setWrongNumber(false);
  };
  return (
    <form onSubmit={handlePhoneNumber} className={`${styles.mainForm}`}>
      <div className={`${styles.top}`}>
        <table>
          <tbody>
            <tr>
              <td>کل قیمت :</td>
              <td>{getAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            </tr>
            <tr>
              <td>تخفیف : </td>
              <td>{getDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            </tr>
            <tr>
              <td>جمع :</td>
              <td>{getTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            </tr>
          </tbody>
        </table>
        {/* <span>
          جمع : {getAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        <span>
          تخفیف : {getDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
        </span>
        <span>
          کل : {getTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span> */}
      </div>
      <div className={`${styles.middle}`}>
        <input
          className={`${styles.input}`}
          type="text"
          placeholder="نام و نام خانوادگی"
        />
        <input
          className={`${styles.input}`}
          type="text"
          placeholder="آدرس خود را وارد نمایید"
        />
        <input
          className={`${styles.input}`}
          type="number"
          placeholder="کد پستی"
        />
        <input
          className={`${styles.input}`}
          type="number"
          placeholder="شماره موبایل"
        />
      </div>
      <div className={`${styles.bottom}`}>
        <button type="submit" className={`${styles.button}`}>
          ثبت سفارش
        </button>
      </div>
    </form>
  );
};

export default Checkout;
