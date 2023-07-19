import React from 'react'
import * as api from '../../../api/api'
import Card from '@/components/card/Card'
import styles from './sevenIcon.module.scss'
import Head from 'next/head'
const sevenIcon= ({data,context}) => {
    console.log(data)
  return (
    <>
    <Head>
        <title>{context}</title>
    </Head>

    <div className={`${styles.mainContainer}`}>
        {data.map(item=>{
            return <Card products={item} key={item.id}/>
        })}
    </div>
        </>
  )
}

export default sevenIcon

export const getServerSideProps = async (context)=>{
    const request  = await api.GET(`products/${context.params.sevenIcon}`)
    const response = await request.data

    if(response){
        return{
            props:{
                data:response,
                context:context.params.sevenIcon
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