import React from 'react'

interface TitleProps {
  firstWord: string;
  secondWord: string;
}

const Title = ({ firstWord = 'Product', secondWord = 'Management' }: TitleProps) => {
  return (
    <div>
      <span className="text-white text-7xl font-extrabold">{firstWord}</span>

      <div className="relative">
        {/* TEXTO */}
        <span className="relative z-10 text-blue-400 text-7xl font-extrabold">{secondWord}</span>

        {/* LÍNEA */}
        <img
          className="absolute left-0 w-full z-0"
          src="/vector.svg"
          alt="sombra"
        />
      </div>
    </div>
  );
};

export default Title