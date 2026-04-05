import React from 'react';

const Index = ({text = "Read more"}:{text?: string}) => {
  return <button className='
  bg-secondary text-white font-medium py-2 px-4 rounded-lg 
  h-15 w-31.5 
  hover:bg-secondary 
  transition duration-300 ease-in-out hover:scale-110
  '>
    {text}
  <div>
    <img src="/public/arrow.svg" alt="" />
  </div>
  </button>
};

export default Index;