import React from 'react'
import { Icon } from '@iconify/react'
import LoginButton from '@/components/atoms/Buttons/Login'

interface PriceProps {
    planTitle: string
    price: string
    message: string
}

const price = ({ planTitle, price, message }: PriceProps) => {
  return (
    <div className='w-lg h-[634px] flex flex-col p-10 bg-white rounded-2xl border border-[#FFE492]'>
        <div>
            <h2 className='text-2xl font-bold text-left text-black'>{planTitle}</h2>
            <div className='text-4xl py-5 font-bold text-left text-black'>{price}</div>
        </div>
        <div>
            <h3 className='text-lg font-normal text-left text-black'>{message}</h3>
            <ul className='mt-5 flex flex-col gap-2'>
                <ItemList text='Capture ideas and find them quickly' />
                <ItemList text='Only text for you' />
                <ItemList text='And more features' />
                <ItemList text='And other more features' />
                <ItemList text='Only text for you' />
            </ul>
        </div>
        <div className='mt-10 flex justify-start items-center'><LoginButton /></div>
    </div>
  )
}

const ItemList = ({text = 'Capture ideas and find them quickly'}) => {
    return (
        <li className='flex items-center gap-2 text-left text-black text-sm font-normal py-2'>
            <Icon icon='material-symbols:check-circle' width='24' height='24' />
            <span className='text-base font-normal text-left text-black'>{text}</span>
        </li>
    )
}

export default price