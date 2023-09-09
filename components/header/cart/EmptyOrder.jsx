import Link from "next/link";
import React from "react";
import { BsMinecartLoaded } from "react-icons/bs";

const EmptyOrder = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        width: "80%",
        height: "500px",
        borderRadius: "3px",
        // boxShadow:'0 0 1px black',
        border: "1px solid #E0E0E0",
        margin: "50px auto",
        fontSize: "100px",
      }}
    >
      <BsMinecartLoaded />
      <span style={{ fontSize: "medium" }}> سفارش ثبت شده ای ندارید</span>
      <Link
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          fontSize: "medium",
          width: "180px",
          height: "40px",
          backgroundColor: "#E0E0E0",
          color: "#757575",
        }}
        href={"/"}
      >
        برگشت
      </Link>
    </div>
  );
};

export default EmptyOrder;
