import Head from "next/head";
import MainSlider from "@/components/mainSlider/MainSlider";
import IncredibleOffer from "@/components/incredibleOffer/IncredibleOffer";
import Categories from "@/components/categories/Categories";
import DailyOffer from "@/components/dailyOffer/DailyOffer";
import { useDispatch } from "react-redux";
import { addFromLocalStorage } from "@/redux/reducer/StoreReducer";

// ---------------------------------------------------------------------------------------->>
export default function Home() {

  return (
    <>
      <Head>
        <title>bESTShop</title>
      </Head>
        <main>
          <MainSlider />
          <Categories />
          <IncredibleOffer />
          <DailyOffer />
        </main>
    </>
  );
}

// export const getServerSideProps = async (context) => {
//   try{
//     let data = await api.GET("products/categories");
//     data = await data.data;
//     return{
//       props:{
//         category:data
//       }
//     }
//   }catch{
//     return{
//       notFound:true
//     }
//   }

// };
