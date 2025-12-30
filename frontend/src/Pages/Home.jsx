import React, { useState } from 'react';
import Card from '../components/Card';
const Home = ({ images }) => {
  const [openImage, setOpenImage] = useState('');
  return (
    <div className='px-5 min-h-[calc(100vh-96px)] block columns-5 auto-cols-auto'>
      <Card images={images} setOpenImage={setOpenImage} />
      {openImage === '' ? (
        ''
      ) : (
        <div className='fixed inset-0 flex items-center justify-center bg-black/60 p-4'>
          <div className='bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden'>
            <div className='w-full max-h-[70vh] flex items-center justify-center bg-black'>
              <img
                src={openImage}
                alt='preview'
                className='max-h-[70vh] w-auto object-contain'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
