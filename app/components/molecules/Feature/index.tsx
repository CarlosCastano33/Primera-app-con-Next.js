import React from 'react'
import Title from '@/components/atoms/Title'
import PrincipalButton from '@/components/atoms/Buttons/Principal'

interface InformationProps {
    firstWord: string;
    secondWord: string;
    text: string;
    buttonText: string;
    orientation: boolean;
  }

const feature = ({ firstWord = 'Work', secondWord = 'together', text = 'Texto largo explicativo en letras pequeñas',
    buttonText = 'Get started'
 }: InformationProps) => {
  return (
    <div className='flex flex-col items-start justify-center gap-8 max-w-xl'>
        <div>
            <Title firstWord={firstWord} secondWord={secondWord}></Title>
        </div>
        <div className=''>
            <p className='text-white font-normal text-lg text-justify'>{text}</p>
            <PrincipalButton text={buttonText}></PrincipalButton>
        </div>
    </div>
  )
}

export default feature