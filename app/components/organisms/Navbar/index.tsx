import React from 'react'
import Menu from '@/components/molecules/Menu'
import Image from 'next/image'
import LoginButton from '@/components/atoms/Buttons/Login'
import PrincipalButton from '@/components/atoms/Buttons/Principal'

const index = () => {
  return (
    <div className='flex flex-row items-center justify-around w-full shadow-md py-4'>
        <div>
            <Image src='/Logo.png' alt="Logo" width={200} height={50} className='object-contain' />
        </div>
        <div>
            <Menu />
        </div>
        <div className='flex flex-row items-center justify-center gap-4'>
            <LoginButton />
            <PrincipalButton />
        </div>
    </div>

  )
}

export default index