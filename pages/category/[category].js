import Card from '@/components/card/Card'
import React from 'react'
import * as api from '../../api/api'
import styles from './Category.module.scss'
const category = (props) => {
  return (
    <div className={`${styles.mainContainer}`}>
        <div className={`${styles.rightContainer}`}>
            {props.products.map(item=>{
                return <Card products={item} key={item.id}/>
            })}
            
        </div>
        <div className={`${styles.leftContainer}`}>

        </div>
    </div>
  )
}

export default category

export const getServerSideProps = async (context)=>{
    try{
        const url = await api.GET(`products/category/${context.params.category}`)
        const response = await url.data
        return{
            props:response,
        }
    }catch{
        return {
            notFound:true
        }
    }
}