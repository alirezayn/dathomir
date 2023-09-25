import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./checkout.module.scss";
import { submitOrder, submitProducts } from "@/redux/features/OrderReducer";
import Toast from "react-bootstrap/Toast";
import { ToastContainer } from "react-bootstrap";
import { useRouter } from "next/router";
import Head from "next/head";
import { numberSeperate } from "@/lib/numberSeperate";

const Checkout = () => {
  const route = useRouter();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getAmount = cart.reduce(
    (amount, item) => amount + item.quantity * item.price,
    0
  );

  let getDiscount = cart.reduce(
    (amount, item) =>
      item.discount == 0
        ? amount + item.quantity * item.price
        : amount + item.quantity * item.discount,
    0
  );
  getDiscount = getAmount - getDiscount;

  const getTotal = getAmount - getDiscount;

  const zipCodeNumber = useRef();
  const phoneNumber = useRef();
  const name = useRef();
  const address = useRef();

  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  const [wrongNumber, setWrongNumber] = useState(false);

  const [empty, setEmpty] = useState(false);

  const [zipCode, setZipCode] = useState(false);

  const handleOrderSubmit = (e) => {
    // if (wrongNumber == true) {
    //   setWrongNumber(true);
    // } else if (emptyNumber == true) {
    //   setEmptyNumber(true);
    // } else if (zipCode == true) {
    //   setZipCode(true);
    // } else {
    // if (!wrongNumber || !zipCode) {
    //   alert("error");
    // } else {
      setShowA(!showA);
      route.push("/checkout/orders");
      dispatch(
        submitOrder({
          name: name.current.value,
          address: address.current.value,
          zipCode: zipCodeNumber.current.value,
          phone: phoneNumber.current.value,
          price: getAmount,
          discount: getDiscount,
          total: getTotal,
        })
      );
    // }

    dispatch(submitProducts(cart.map((item) => item)));
    // }

    e.preventDefault();
  };
  const emptyInputhandler = (e) => {
    if (e.target.value == 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };
  const handleZipCode = () => {
    if (zipCodeNumber.current.value.length == 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
    if (zipCodeNumber.current.value.length >= 11) {
      setZipCode(true);
    } else {
      setZipCode(false);
    }
    if (zipCodeNumber.current.value.length < 10) {
      setZipCode(true);
    }
  };
  const handlePhoneNumber = () => {
    if (phoneNumber.current.value.length == 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
    if (phoneNumber.current.value.length > 11) {
      setWrongNumber(true);
    } else {
      setWrongNumber(false);
    }
    if (phoneNumber.current.value.length < 11) {
      setWrongNumber(true);
    }
  };
  return (
    <>
    
      <form onSubmit={handleOrderSubmit} className={`${styles.mainForm}`}>
        <div className={`${styles.top}`}>
          <table>
            <tbody>
              <tr>
                <td>کل قیمت :</td>
                <td>
                  {numberSeperate(getAmount)}
                </td>
              </tr>
              <tr>
                <td>تخفیف : </td>
                <td>
                  {numberSeperate(getDiscount)}
                </td>
              </tr>
              <tr>
                <td>جمع :</td>
                <td>
                  {numberSeperate(getTotal)}
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
            ref={name}
            required={true}
            // onInvalid={(e) =>
            //   e.target.setCustomValidity("نام خود را وارد نمایید")
            // }
          />
          <input
            className={`${styles.input}`}
            type="text"
            placeholder="آدرس خود را وارد نمایید"
            ref={address}
            required={true}
            // onInvalid={(e) =>
            //   e.target.setCustomValidity("ادرس خود را وارد نمایید")
            // }
            
          />
          <input
            className={`${styles.input}`}
            type="number"
            placeholder="کد پستی را وارد نمایید"
            required={true}
            // onInvalid={(e) => e.target.setCustomValidity("کد پستی اشتباه است")}
            ref={zipCodeNumber}
            onChange={handleZipCode}
          />
          {zipCode ? <label>wrong zip Code</label> : null}
          <input
            className={`${styles.input}`}
            type="number"
            placeholder={empty ? "خالی نگذارید" : "شماره موبایل"}
            name="phone"
            ref={phoneNumber}
            required={true}
            // onInvalid={(e) =>
            //   e.target.setCustomValidity("لطفا شماره خود را وارد نمایید")
            // }
            onChange={handlePhoneNumber}
          />
          {wrongNumber ? <label>شماره اشتباه است</label> : null}
        </div>
        <div className={`${styles.bottom}`}>
          <button
            type="submit"
            className={`${styles.button}`}

            // disabled={zipCode || wrongNumber || empty ? true : false}
          >
            ثبت سفارش
          </button>
        </div>
      </form>
      <ToastContainer position="bottom-start" style={{ position: "fixed" }}>
        <Toast show={showA} onClose={toggleShowA} bg="secondary">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">ثبت سفارش</strong>
            <small>بستن</small>
          </Toast.Header>
          <Toast.Body className="white text-white">سفارش شما ثبت شد</Toast.Body>
        </Toast>
      </ToastContainer>
      {/* <button onClick={toggleShowA}>show</button> */}
    </>
  );
};

export default Checkout;
