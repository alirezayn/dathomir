import React from 'react'
import { useSelector } from 'react-redux'

const CartBadge = () => {
  const length = useSelector(state=>state.cart.length)
    return (
    <span>{length}</span>
  )
}

export default CartBadge