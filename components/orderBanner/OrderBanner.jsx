import React from 'react'
import {PiCalendarCheckThin, PiShoppingCartSimpleLight} from 'react-icons/pi'
import {LiaShippingFastSolid} from 'react-icons/lia'
import styles from './orderBanner.module.scss'
const OrderBanner = ({date}) => {
  return (
    <>
    
    <PiShoppingCartSimpleLight style={{opacity:".4"}}/>
    <PiCalendarCheckThin className={!date ? `${styles.order}`: `${styles.opacity}` }/>
    <LiaShippingFastSolid className={date ? `${styles.order}`: `${styles.opacity}` }/>
    </>
  )
}

export default OrderBanner