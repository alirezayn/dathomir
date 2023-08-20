import React, { useRef, useState } from "react";
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
      amount + item.quantity * (item.discount != 0 ? item.price : 0),
    0
  );
  getDiscount = getAmount - getDiscount;

  const getTotal = getAmount - getDiscount;
  const phoneNumber = useRef();
  const zipCodeNumber = useRef();

  const [show, setShow] = useState(false);

  const [wrongNumber, setWrongNumber] = useState(false);

  const [emptyNumber, setEmptyNumber] = useState(false);

  const [zipCode, setZipCode] = useState(false);
const handleOrderSubmit = () =>{
  
}
  const handleZipCode = () => {
    zipCodeNumber.current.value.length == 0
      ? setZipCode(true)
      : setZipCode(false);
    zipCodeNumber.current.value.length >= 11
      ? setZipCode(true)
      : setZipCode(false);
  };
  const handlePhoneNumber = () => {
    phoneNumber.current.value.length == 0
      ? setEmptyNumber(true)
      : setEmptyNumber(false);
    phoneNumber.current.value.length >= 12
      ? setWrongNumber(true)
      : setWrongNumber(false);
  };
  return (
    <form onSubmit={handleOrderSubmit} className={`${styles.mainForm}`}>
      <div className={`${styles.top}`}>
        <table>
          <tbody>
            <tr>
              <td>کل قیمت :</td>
              <td>
                {getAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
            </tr>
            <tr>
              <td>تخفیف : </td>
              <td>
                {getDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
            </tr>
            <tr>
              <td>جمع :</td>
              <td>
                {getTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
            </tr>
          </tbody>
        </table>
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
          placeholder={
            zipCode ? "این قسمت را پر کنید" : "کد پستی را وارد نمایید"
          }
          onChange={handleZipCode}
          ref={zipCodeNumber}
        />
        {zipCode ? <label>wrong zip Code</label> : null}
        <input
          className={`${styles.input}`}
          type="number"
          placeholder={emptyNumber ? "خالی نگذارید" : "شماره موبایل"}
          name="phone"
          onChange={handlePhoneNumber}
          ref={phoneNumber}
        />
        {wrongNumber ? <label>شماره اشتباه است</label> : null}
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
