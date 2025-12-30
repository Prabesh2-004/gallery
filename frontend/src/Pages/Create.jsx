import { X } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Create = ({ setImages }) => {
  const { toggleTheme } = useContext(ThemeContext)
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  const handleCreate = (e) => {
    e.preventDefault();
    if (!image || !title) return;

    setImages(prev => [
    ...prev,
    {
      title,
      image
    }
  ]);
    setTitle('')
    setImage(null);
  };
  return (
    <div className='flex justify-center min-h-[calc(100vh-96px)]'>
      <form action='#' onSubmit={handleCreate} method='post'>
        <label
          htmlFor='fileInput'
          className={`border relative bg-white rounded-md text-sm w-80 border-indigo-600/60 p-8 flex flex-col items-center gap-4  ${
            image ? '' : 'cursor-pointer'
          } hover:border-indigo-500 transition`}
        >
          {image ? (
            <button
              onClick={() => setImage(null)}
              className='absolute right-5 top-5 border rounded-2xl cursor-pointer'
            >
              <X />
            </button>
          ) : (
            ''
          )}
          {image ? (
            <img src={image} alt='image' />
          ) : (
            <>
              <svg
                width='44'
                height='44'
                viewBox='0 0 44 44'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M25.665 3.667H11a3.667 3.667 0 0 0-3.667 3.666v29.334A3.667 3.667 0 0 0 11 40.333h22a3.667 3.667 0 0 0 3.666-3.666v-22m-11-11 11 11m-11-11v11h11m-7.333 9.166H14.665m14.667 7.334H14.665M18.332 16.5h-3.667'
                  stroke='#2563EB'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <p className='text-gray-500'>Drag & drop your files here</p>
              <p className='text-gray-400'>
                Or <span className='text-indigo-500 underline'>click</span> to
                upload
              </p>
              <input
                id='fileInput'
                accept='image/*'
                onChange={handleImageChange}
                type='file'
                className='hidden'
              />
            </>
          )}
        </label>
        <div className='flex flex-col gap-2 my-2'>
          <label htmlFor='title' className={`${toggleTheme ? 'text-black' : 'text-white'}`}>
            Image Title:{' '}
          </label>
          <input
            type='text'
            onChange={handleTitleChange}
            placeholder='Enter Your Title'
            className={`${toggleTheme ? 'text-black' : 'text-white'} border   p-2 `}
          />
        </div>
        <button
          type='submit'
          className='w-full text-white rounded cursor-pointer p-2 px-5 bg-green-500 mt-3'
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Create;
