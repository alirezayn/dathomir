import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CheckOrders = () => {
  const order = useSelector((state) => state.order.order);
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
            <td>{order.price}</td>
          </tr>
          <tr>
            <td>تخفیف</td>
            <td>{order.discount}</td>
          </tr>
          <tr>
            <td>جمع</td>
            <td>{order.totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <Link
        href={"/checkout/orders"}
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
        }}
      >
        مرحله بعد
      </Link>
    </div>
  );
};

export default CheckOrders;
