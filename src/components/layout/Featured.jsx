import React from 'react'
import Image from 'next/image'
import FeaturedCard from '../cards/FeaturedCard'
import { featuredData } from '@/data/featured-data'

function Featured() {
  return (
    <div className='pt-20 pb-32' id='featured'>
      <div className='flex justify-center mb-20'>
        <Image
          className='h-10 w-auto ease-in mt-6'
          width={40}
          height={40}
          src='/img/headings/meet.svg'
          alt='rebel'
        />
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 '>
        {featuredData &&
          featuredData.map((a, i) => <FeaturedCard key={i} ape={a} />)}
      </div>
      <div className='flex justify-center mt-20'>
        <a
          className='text-white duration-150'
          href='https://opensea.io/collection/rebelapeyc'
          target='_blank'
        >
          <Image
            className='h-16 w-auto ease-in mb-10  hover:transform hover:scale-105 duration-150'
            width={40}
            height={40}
            src='/img/buttons/become-a-rebel.svg'
            alt='discord'
          />
        </a>
      </div>
    </div>
  )
}

export default Featured
