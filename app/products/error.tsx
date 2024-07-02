"use client"
import React from 'react'

function ErrorBoundary({error, reset}:{
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
        {error.message} <br />
        <button className='p-4 my-2 bg-gray-300' onClick={reset}>Try Again</button>
    </div>
  )
}

export default ErrorBoundary