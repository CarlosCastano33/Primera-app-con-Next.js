'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import {Icon} from '@iconify/react'
import Menu from '@/components/molecules/Menu'

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex flex-row items-center justify-between w-full bg-primary shadow-md py-4 px-6 relative'>
        <div>
          <Image src='/Logo.png' alt="Logo" width={150} height={30} className='object-contain' />
        </div>
        <div>
          <button onClick={() => setOpen(!open)} className='focus:outline-none'>
            <Icon icon="entypo:menu" color='white' width="42" height="24" />
          </button>
        </div>
        {open && (<div className='bg-white shadow-md w-5/6 absolute inset-x-10 top-20'>
          <Menu />
        </div>)}
    </div>
  )
}

export default MobileNav