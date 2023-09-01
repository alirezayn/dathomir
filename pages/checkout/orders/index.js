import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./orders.module.scss";
import { Form } from "react-bootstrap";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { HiOutlineCash } from "react-icons/hi";
import ShippingTime from "@/components/weekday/ShippingTime";
import { removeOrder } from "@/redux/features/OrderReducer";
import Head from "next/head";
const orders = () => {
  const order = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    if (cart.length == 0) {
      dispatch(removeOrder());
    }
  }, []);
  const discountCode = useRef();
  const [payment, setPayment] = useState("پرداخت اینترنتی");
  const [checked, setChecked] = useState(1);
  
  let totalPrice =
    order.order.price &&
    order.order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const shippingPrice = 40000;
  let discount = order.order.discount &&
  order.order.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
  const radioChecked = (e) => {
    setPayment(e.target.value);
    setChecked(e.target.id);
  };
  return (
    <>
    <Head>
      <title>
        bestshop فروشگاه اینترنتی
      </title>
    </Head>
      {Object.keys( order.order).length > 0 ? (
        <>
          <div className={`${styles.topContainer}`}></div>
          <div className={`${styles.mainContainer}`}>
            <div className={`${styles.rightContainer}`}>
              <h5>انتخاب روش پرداخت</h5>
              <div className={`${styles.choosePayment}`}>
                <div className={`${styles.row}`}>
                  <Form.Check
                    type="radio"
                    name="payment"
                    id="1"
                    value="پرداخت اینترنتی"
                    defaultChecked={true}
                    onClick={radioChecked}
                  />
                  <BsCreditCard2FrontFill
                    style={{ fontSize: "40px" }}
                    className={
                      checked == 1
                        ? `${styles.selectedColor}`
                        : `${styles.notSelected}`
                    }
                  />
                  <span>پرداخت اینترنتی</span>
                </div>
                <hr />
                <div className={`${styles.row}`}>
                  <Form.Check
                    type="radio"
                    id="2"
                    name="payment"
                    value="پرداخت در محل"
                    onClick={radioChecked}
                  />
                  <HiOutlineCash
                    style={{ fontSize: "40px" }}
                    className={
                      checked == 2
                        ? `${styles.selectedColor}`
                        : `${styles.notSelected}`
                    }
                  />
                  <span>پرداخت در محل</span>
                </div>
              </div>
              <input
                type="text"
                className={`${styles.discountCode}`}
                placeholder="کد تخفیف"
                ref={discountCode}
              />
              <ShippingTime />
            </div>
            <div className={`${styles.leftContainer}`}>
              <label className={`${styles.label}`}>
                <h6>
                  قیمت کالا ها&nbsp;&#58;&#40;{order.products.length}&#41;
                </h6>
                <h6>
                  {totalPrice}&nbsp;{"تومان"}
                </h6>
              </label>
              <label className={`${styles.label}`}>
                <h6>هزینه ارسال</h6>
                <h6>
                  {shippingPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  &nbsp;{"تومان"}
                </h6>
              </label>
              <label className={`${styles.label} ${styles.red}`}>
                <h6>سود شما از خرید</h6>
                <h6>
                  {discount}&nbsp;{"تومان"}
                </h6>
              </label>
              <label className={`${styles.label}`}>
                <h6>قابل پرداخت</h6>
                <h6>
                  {(order.order.totalPrice + shippingPrice)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  &nbsp;{"تومان"}
                </h6>
              </label>

              {order.order.date ? (
                <button className={`${styles.payButton}`}>پرداخت</button>
              ) : (
                <lable className={`${styles.shippingTime}`}>
                  انتخال زمان ارسال
                </lable>
              )}
            </div>
          </div>
        </>
      ) : <label> سفارش ثبت شده ای ندارید</label>}
    </>
  );
};

export default orders;
