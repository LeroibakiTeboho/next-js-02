import React from 'react'

function ProductDetails({params} : {
    params: {
        productid: string
    }
}) {
  return (
    <h1>Product Details {params.productid}</h1>
  )
}

export default ProductDetails