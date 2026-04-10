import React from 'react'
import PrincipalButton from '@/components/atoms/Buttons/Principal'

const herotext = () => {
  return (
    <div className='flex flex-col items-start max-w-2xl px-4 gap-8'>
        <div>
            <h1 className='text-white text-6xl font-bold mt-10'>Mi primera app con react papi</h1>
        </div>
        <div>
            <p className='text-white text-lg mt-4'>
                Este es mi ejemplo, el mejor
            </p>
        </div>
        <div>
          <PrincipalButton text='Tryyy yes'></PrincipalButton>
        </div>
    </div>
    
  )
}

export default herotext