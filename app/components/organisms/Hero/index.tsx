import React from 'react'
import Image from 'next/image'
import Herotext from '@/components/molecules/Herotext'

const index = () => {
  return (
    <div className='relative w-full h-screen flex flex-col items-center justify-center bg-primary'>
        <div className='relative w-full h-screen z-0'>
          <Image 
            src='/background.png'
            alt='Hero image'
            quality={100}
            fill
            sizes='100vw'
            style={{
              objectFit: 'cover'
            }}
            className='object-cover'
          />
        </div>
        <div className='absolute w-full flex items-center justify-center h-full mt-8 z-10'>
          <div>
            <Herotext />
          </div>
          <div className='relative w-full flex items-center justify-center h-1/2 mt-8'>
          <Image 
            src='/yo.png'
            alt='Hero image'
            quality={100}
            width={824}
            height={500}
            style={{
              objectFit: 'cover'
            }}
            className='rounded-4xl'
          />
          </div>
        </div>
    </div>
  )
}

export default index