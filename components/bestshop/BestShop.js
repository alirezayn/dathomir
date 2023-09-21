import Link from 'next/link'
import React from 'react'
import styles from './bestshop.module.scss'
const BestShop = () => {
  return (
    <Link href={'/'} className={`${styles.bestShop}`} >
    bestshop
  </Link>
  )
}

export default BestShop