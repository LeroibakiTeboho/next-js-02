import React from 'react'
import { Metadata } from 'next'

type Props = {
  params: {
    productid: string;
  }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productid}`)
    }, 100)
  })
  return{
    title: `${title}`
  }
}


function ProductDetails({params} : Props) {
  return (
    <h1>Details about product {params.productid}</h1>
  )
}

export default ProductDetails