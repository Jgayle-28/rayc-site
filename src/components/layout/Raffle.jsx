import Image from 'next/image'
import React from 'react'
import ReactPlayer from 'react-player'

function Raffle() {
  return (
    <div className='pt-20 pb-20  w-full'>
      <div className='flex flex-col items-center'>
        <Image
          className='h-16 w-auto hover:-rotate-3 ease-in duration-100 mb-10'
          width={40}
          height={40}
          src='/img/headings/win-lambo.svg'
          alt='discord'
        />

        <p className='text-lg md:text-xl text-primary font-medium mb-6 text-center'>
          Become a Rebel and enter for a chance to win a lambo.
        </p>
      </div>
      <div
        className='w-full bg-cover bg-center py-20'
        style={{ backgroundImage: `url('/img/backgrounds/raffle.svg')` }}
      >
        <div className='w-full md:w-1/2 mx-auto'>
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/HKgvX4aAivM'
              width='100%'
              height='100%'
            />
          </div>
        </div>

        <div className='flex justify-center mt-10'>
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
    </div>
  )
}

export default Raffle
