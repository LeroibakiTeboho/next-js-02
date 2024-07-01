import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title : {
    absolute : 'Blog' // Used to ignore the template
  },
}


function Blog() {
  return (
    <h1>Blog</h1>
  ) 
}

export default Blog