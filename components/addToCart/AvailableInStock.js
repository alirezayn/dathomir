import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaTruckFast} from 'react-icons/fa6'
const AvailableInStock = () => {
  return (
    <>
    <hr />
        <ul style={{listStyleType:"none", lineHeight:"50px"}}>
            <li>
            <h6 style={{fontWeight:"bolder"}}>موجود در انبار bESTShop</h6>
            <ul style={{listStyleType:"none", lineHeight:"25px",marginTop:"20px",fontSize:"small"}}>
                <li> <TbTruckDelivery style={{color:"red", transform:"scaleX(-1)"}} /> ارسال bESTShop</li>
                <li><FaTruckFast style={{color:"blue", transform:"scaleX(-1)"}} /> ارسال فوری </li>
            </ul>
            </li>
        </ul>
    <hr />
    </>
  )
}

export default AvailableInStock


