import Link from 'next/link'
import React from 'react'



function Home() {
  return (
   
    <>
         <h1 className='text-5xl font-bold'>Welcome Home!</h1>
         <Link href='/blog'><h2>Blog</h2></Link>
         <Link href='/products'><h2>Products</h2></Link>
    </>

  )
}

export default Home