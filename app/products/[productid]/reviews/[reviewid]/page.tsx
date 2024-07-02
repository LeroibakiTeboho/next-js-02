"use client"
import { notFound } from 'next/navigation'
import React from 'react'

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}


function ReviewDetail({params,}: {
    params: {
        productid: string,
        reviewid: string
    }
}) {

  const random = getRandomInt(2);

  if(random === 1 ) {
    throw new Error("Error Loading Review...");
  }

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