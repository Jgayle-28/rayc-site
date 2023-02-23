import React from 'react'

function FeaturedCard({ ape }) {
  return (
    <div className='rounded-xl bg-card-dark p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 '>
      <div className='relative flex items-end overflow-hidden rounded-xl'>
        <img src={ape.img} alt='Rebel Ape' />
      </div>
    </div>
  )
}

export default FeaturedCard
