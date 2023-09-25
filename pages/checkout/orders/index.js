import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./orders.module.scss";
import { Form } from "react-bootstrap";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { HiOutlineCash } from "react-icons/hi";
import ShippingTime from "@/components/weekday/ShippingTime";
import { removeOrder } from "@/redux/features/OrderReducer";
import Head from "next/head";
import OrderBanner from "@/components/orderBanner/OrderBanner";
import EmptyOrder from "@/components/header/cart/EmptyOrder";
import { numberSeperate } from "@/lib/numberSeperate";

const orders = () => {
  const order = useSelector((state) => state.order);
  const cart = useSelector(state=>state.cart)
  // if(cart.length)
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (localStorage.getItem('cart').length == 0) {
      dispatch(removeOrder());
    }
  }, []);
  const discountCode = useRef();
  const [payment, setPayment] = useState("پرداخت اینترنتی");
  const [checked, setChecked] = useState(1);
  
  let totalPrice =
    order.order.price &&
    numberSeperate(order.order.price)
  const shippingPrice = 40000;
  let discount = order.order.discount &&
  numberSeperate(order.order.discount)
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
      {cart.length > 0 ? (
        <>

          <div className={`${styles.topContainer}`}>
            <OrderBanner date={order.order.date}/>
          </div>
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
              <span className={`${styles.label}`}>
                <h6>
                  قیمت کالا ها&nbsp;&#58;&#40;{order.products.length}&#41;
                </h6>
                <h6>
                  {totalPrice}&nbsp;{"تومان"}
                </h6>
              </span>
              <span className={`${styles.label}`}>
                <h6>هزینه ارسال</h6>
                <h6>
                  {numberSeperate(shippingPrice)}
                  &nbsp;{"تومان"}
                </h6>
              </span>
              <span className={`${styles.label} ${styles.red}`}>
                <h6>سود شما از خرید</h6>
                <h6>
                  {discount}&nbsp;{"تومان"}
                </h6>
              </span>
              <label className={`${styles.label}`}>
                <h6>قابل پرداخت</h6>
                <h6>
                  {numberSeperate(order.order.totalPrice + shippingPrice)}
                  &nbsp;{"تومان"}
                </h6>
              </label>

              {order.order.date ? (
                <button className={`${styles.payButton}`}>پرداخت</button>
              ) : (
                <span className={`${styles.shippingTime}`}>
                  انتخال زمان ارسال
                </span>
              )}
            </div>
          </div>
        </>
      ) : <EmptyOrder />}
    </>
  );
};


export default orders;
