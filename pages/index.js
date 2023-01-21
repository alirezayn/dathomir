import Head from 'next/head'
import MainSlider from '@/components/mainSlider/MainSlider';
import IncredibleOffer from '@/components/incredibleOffer/IncredibleOffer';
import Categories from '@/components/categories/Categories';
import DailyOffer from '@/components/dailyOffer/DailyOffer';
export default function Home(props) {
  return (
    <>
    <Head>
      <title>
        bESTShop
      </title>
    </Head>
    <main>
      <MainSlider />
      <Categories />
      <IncredibleOffer />
      <DailyOffer />
    </main>
    </>
  )
}


