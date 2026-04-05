import React from 'react'
import Image from 'next/image'

const layout = ({
    children
}: Readonly<{
    children: React.ReadNode;
}>) => {
  return (
  <div className='relative flex flex-col w-full h-screen items-center justify-center bg-black'>    
    <Image 
        className='top-30 left-0 absolute z-0'
        src='/background2.png' 
        alt='fondo' 
        width={500} 
        height={400}
        />
    <div
    className='absolute z-10 w-full h-full flex items-center justify-center'>
        {children}
    </div>
  </div>
  )
}

export default layout