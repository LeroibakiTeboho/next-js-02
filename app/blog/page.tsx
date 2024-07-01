import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
  title : {
    absolute : 'Blog' // Used to ignore the template
  },
}


function Blog() {
  return (
    <div>

      <Link href='/'><h2>Home</h2></Link>
      <h1>Blog</h1>
    </div>
    
  ) 
}

export default Blog