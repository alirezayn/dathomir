import Image from 'next/image'
import React from 'react'

const notFound = () => {
  return (
    <div>
      <Image 
        src={"/images/notFound.png"}
        alt={'404 Error'}
        width={800}
        height={600}
        priority
      />
    </div>
  )
}

export default notFound