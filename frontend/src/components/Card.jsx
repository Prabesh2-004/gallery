import { Ellipsis } from 'lucide-react';
import React, { useState } from 'react';

const Card = ({images}) => {
  const [option, setOption] = useState(null)
  const handleOption = (index) => {
    setOption(prev => (prev === index ? null : index))
  }
  const handleClick = (index) => {
      console.log(window.location.href + images[index].image)
  }
  return (
    <>
      {images.map((item, index) => (
        <div key={index} className='relative mb-5 break-inside-avoid rounded-xl shadow-2xl '>
          <div className='z-10 absolute w-full flex justify-between text-white p-2'>
            <h1 className='text-lg'>{item.title}</h1>
            <button onClick={() => handleOption(index)} className='cursor-pointer'><Ellipsis /></button>
            <div className={`${option === index ? 'flex' : 'hidden'} absolute right-4 top-10 shadow-md flex-col bg-white text-black rounded-md`}>
              <button className='hover:bg-gray-300 p-2 rounded-t-md'>Delete</button>
              <button className='hover:bg-gray-300 p-2 rounded-b-md'>Edit</button>
            </div>
          </div>
          <img className='rounded-xl w-full h-auto block cursor-pointer hover:brightness-75' onClick={() => handleClick(index)} src={item.image} alt='img' />
        </div>
      ))}
    </>
  );
};

export default Card;
