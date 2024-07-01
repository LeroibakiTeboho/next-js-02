import Link from 'next/link'
import React from 'react'



function Home() {
  return (
   
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    }}>
         <h1>Welcome Home!</h1>
         <Link href='/blog'><h2>Blog</h2></Link>
         <Link href='/products'><h2>Products</h2></Link>
    </div>

  )
}

export default Home