import Head from 'next/head'
import Image from 'next/image'
import MainSlider from '@/components/mainSlider/MainSlider';
import styles from './index.module.scss';
export default function Home() {
  return (
    <>
      <MainSlider />
    </>
  )
}
