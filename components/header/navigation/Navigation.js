import Link from 'next/link'
import React from 'react'
import styles from './Navigation.module.scss'
const Navigation = () => {
  return (
    <nav className={`${styles.mainNav}`}>
        <Link className={`${styles.link}`} href={'#'}>محصولات</Link>
        <Link className={`${styles.link}`} href={'#'}>تخفیف</Link>
        <Link className={`${styles.link}`} href={'#'}>جوایز</Link>
        <Link className={`${styles.link}`} href={'#'}>موقعیت من</Link>
    </nav>
  )
}

export default Navigation