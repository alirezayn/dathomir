import React from 'react'

const ProductPrice = ({price,discount}) => {
  return (
    <>
    <h3>{price}</h3>
    {discount = 0 ? null : <h4>{discount}</h4>}
    </>
  )
}

export default ProductPrice