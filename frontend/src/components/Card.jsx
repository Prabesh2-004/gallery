import React from 'react';

const Card = ({images}) => {
  return (
    <>
      {images.map((item, index) => (
        <div key={index} className='mb-5 break-inside-avoid rounded-xl shadow-2xl'>
          <img className='rounded-xl w-full h-auto block cursor-pointer' src={item} alt='img' />
        </div>
      ))}
    </>
  );
};

export default Card;
