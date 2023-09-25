import { numberSeperate } from "@/lib/numberSeperate";
import { submitOrder, submitProducts } from "@/redux/features/OrderReducer";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckOrders = ({ cart, getTotal, getDiscount, getAmount }) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const submitHandler = () => {
    dispatch(
      submitOrder({ price: getAmount, discount: getDiscount, total: getTotal })
    );
    dispatch(submitProducts(cart.map(item=>item)))
    router.push('/checkout/orders')
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "150px",
        padding: "5px",
      }}
    >
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>قیمت</td>
            <td>{numberSeperate(getAmount)}</td>
          </tr>
          <tr>
            <td>تخفیف</td>
            <td>{numberSeperate(getDiscount)}</td>
          </tr>
          <tr>
            <td>جمع</td>
            <td>{numberSeperate(getTotal)}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={submitHandler}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          width: "50%",
          height: "35px",
          backgroundColor: "purple",
          color: "white",
          borderRadius: "5px",
          border:"none"
        }}
      >
        مرحله بعد
      </button>
    </div>
  );
};

export default CheckOrders;
