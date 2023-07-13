import React from 'react'

const CartBadge = ({count}) => {
    return (
    <span style={{
      position:"absolute",
      right:"0",
      bottom:"5px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      width:"18px",
      height:"18px",
      borderRadius:"5px",
      backgroundColor:"red",
      color:"white",
      fontSize:"small"
    }} >
      {count}
    </span>
  )
}

export default CartBadge