import Head from "next/head";
import MainSlider from "@/components/mainSlider/MainSlider";
import IncredibleOffer from "@/components/incredibleOffer/IncredibleOffer";
import Categories from "@/components/categories/Categories";
import DailyOffer from "@/components/dailyOffer/DailyOffer";
import * as api from '../api/api'
import SevenIcons from "@/components/sevenIcons/SevenIcons";
// ---------------------------------------------------------------------------------------->>


export default function Home({icons}) {
  return (
    <>
      <Head>
        <title>bESTShop</title>
      </Head>
      <main>
        <MainSlider />
        <SevenIcons icon={icons} />
        <Categories/>
        <IncredibleOffer />
        <DailyOffer />
      </main>
    </>
  );
}

export const getServerSideProps = async (context) => {


    const iconListRequest = await api.GET("SevenIcons")
    const iconList = await iconListRequest.data


    
    return{
      props:{
        icons:iconList,
      }
    }
  


};
