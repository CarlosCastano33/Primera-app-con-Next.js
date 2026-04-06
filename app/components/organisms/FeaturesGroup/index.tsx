import React from 'react'
import Feature from '@/components/molecules/Feature';
import Image from 'next/image';

interface InformationProps{
    firstWord: string;
    secondWord: string;
    text: string;
    buttonText: string;
    orientation: boolean;
}

const featuresGroup = ({firstWord, secondWord, text, buttonText, orientation}: InformationProps) => {
  return (
    <div className={
        orientation
        ? 'flex items-center justify-center gap-5'
        : 'flex items-center justify-center gap-5 flex-row-reverse'
    }>
        <div className='w-1/2'>
            <Feature
            firstWord = {firstWord}
            secondWord = {secondWord}
            text = {text}
            buttonText = {buttonText}
            orientation = {true}
            ></Feature>
        </div>
        <div className='w-1/2'>
            <Image src='/Work Together Image.png' alt='atómico' width={500} height={500}></Image>
        </div>
    </div>
  )
}

export default featuresGroup