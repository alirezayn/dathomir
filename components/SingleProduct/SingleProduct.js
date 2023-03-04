import Head from 'next/head'
import React from 'react'

const SingleProduct = (props) => {

  return (
    <>
    <Head>
        <title>{props.name}</title>
    </Head>
    
    <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
    </div>
    
    </>
  )
}

export default SingleProduct