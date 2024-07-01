import React from 'react'

function AuthLayout({children}: {
    children: React.ReactNode
}) {
  return (
    <div>     
      
        
            <h2>Inner layout</h2>
            {children}    
    
    </div>
    
  )
}

export default AuthLayout