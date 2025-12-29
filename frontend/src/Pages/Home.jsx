import React from 'react'
import Card from '../components/Card'

const Home = ({images}) => {
  return (
    <div className='px-5 block columns-5 auto-cols-auto'>
      <Card images={images} />
    </div>
  )
}

export default Home
