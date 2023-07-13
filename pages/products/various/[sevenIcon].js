import React from 'react'
import * as api from '../../../api/api'
import Card from '@/components/card/Card'
import styles from './sevenIcon.module.scss'
const sevenIcon= ({data}) => {
    console.log(data)
  return (
    <div className={`${styles.mainContainer}`}>
        {data.map(item=>{
            return <Card products={item} key={item.id}/>
        })}
    </div>
  )
}

export default sevenIcon

export const getServerSideProps = async (context)=>{
    const request  = await api.GET(`products/${context.params.sevenIcon}`)
    const response = await request.data

    if(response){
        return{
            props:{
                data:response
            }
        }
    }else{
        return{
            props:{
                notFound:true
            }
        }
    }
}