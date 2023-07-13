import { requestProduct } from "@/redux/features/StoreReducer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as api from "../../api/api";
const Loading = ({product}) => {
  console.log(product)
  // if(product.data==={})
  // return <></>
  // else{
    return (
     <>
      <h1>{product.data.name}</h1>
      <p>{product.data.description}</p>
     </>
    );

  // }
};

export default Loading;
