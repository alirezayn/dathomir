import Head from "next/head";
import MainSlider from "@/components/mainSlider/MainSlider";
import IncredibleOffer from "@/components/incredibleOffer/IncredibleOffer";
import Categories from "@/components/categories/Categories";
import DailyOffer from "@/components/dailyOffer/DailyOffer";
import * as api from '../api/api'
import SevenIcons from "@/components/sevenIcons/SevenIcons";
// ---------------------------------------------------------------------------------------->>


export default function Home({icons,topBanner}) {
  // const cart = useSelector(state=>state.cart)
  // useEffect(() => {
  //   const getFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
  //   if(cart.length == 0 && getFromLocalStorage){
  //     getFromLocalStorage.map(item=> dispatch(addFromLocalStorage(item)))
  //   }
  // });
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


    const iconListResponse = await api.GET("SevenIcons")
    const iconList = await iconListResponse.data

    
    return{
      props:{
        icons:iconList,
      }
    }
  


};
