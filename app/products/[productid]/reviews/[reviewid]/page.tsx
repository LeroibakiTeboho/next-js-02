import { notFound } from 'next/navigation'
import React from 'react'


function ReviewDetail({params,}: {
    params: {
        productid: string,
        reviewid: string
    }
}) {

  if (parseInt(params.reviewid) > 100) {
    notFound();
  }


  return (
    
    <h1>
        Review {params.reviewid} for product {params.productid}
    </h1>
  )
}

export default ReviewDetail