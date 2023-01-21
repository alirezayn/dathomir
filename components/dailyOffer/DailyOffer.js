import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as api from '../../api/api'
import styles from './DailyOffer.module.scss'
const DailyOffer = () => {
  const [data, setData] = useState([])  
  const min = Math.floor(Math.random()*20)
  useEffect(()=>{
    const getDailyOffer = async ()=>{
      try{
        let data = await api.GET('products/dailySuggests')
        data = await data.data
        setData(data)
      }catch{
        return console.log(axios.AxiosError)
        }
      }
      getDailyOffer()
    },[])
  return (
    <div className={`${styles.mainContainer}`}>
      {data.map(item=>{
        return(
          <div className={`${styles.dailyCards}`} key={item.id}>
            <Link href={''}>
              <h5>{item.name.substring(0,40)}{'...'}</h5>
            </Link>
          </div>
        )
      }).slice(min,min+5)}
    </div>
  )

}
export default DailyOffer