'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'



const navLinks = [
  {name: 'Register', href: '/register'},
  {name: 'Login', href: '/login'},
  {name: 'Just Page', href: '/justpage'}
]


function AuthLayout({children}: {
    children: React.ReactNode
}) {

  const pathName = usePathname();

  return (
    <div>     
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href)


        return(
          <Link href={link.href} key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        )
      })}
      
        

            {children}        
    </div>
    
  )
}

export default AuthLayout