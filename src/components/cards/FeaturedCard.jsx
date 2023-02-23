import React from 'react'
import Image from 'next/image'

function FeaturedCard({ ape }) {
  return (
    <div className='rounded-xl bg-card-dark p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 '>
      <div className='relative flex items-end overflow-hidden rounded-xl'>
        <Image
          className='h-full w-auto'
          width={400}
          height={100}
          src={ape.img}
          alt='Rebel Ape'
        />
      </div>
    </div>
  )
}

export default FeaturedCard
