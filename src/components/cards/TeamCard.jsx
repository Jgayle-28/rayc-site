import Image from 'next/image'
import React from 'react'

function TeamCard({ member }) {
  return (
    <div className='rounded-xl bg-card-dark p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 '>
      <div className='relative flex items-end overflow-hidden rounded-xl'>
        <img src={member.profilePic} alt='Hotel Photo' />
      </div>

      <div className='mt-4 p-2 flex justify-between'>
        <div>
          <h2 className='text-slate-700'>
            <Image
              className='h-4 w-auto ease-in mb-2hover:transform hover:scale-105 duration-150'
              width={40}
              height={40}
              src={member.title}
              alt={member.alt}
            />
          </h2>
          <span className='block mt-3 text-sm text-slate-400'>
            <Image
              className='h-6 w-auto ease-in mb-2hover:transform hover:scale-105 duration-150'
              width={40}
              height={40}
              src={member.name}
              alt={member.alt}
            />
          </span>
        </div>
        <a href={member.twitter} target='_blank'>
          <Image
            className='h-14 w-auto ease-in mb-10 hover:transform hover:scale-105 duration-150'
            width={40}
            height={40}
            src='/img/buttons/twitter-profile.svg'
            alt='rebel'
          />
        </a>
      </div>
    </div>
  )
}

export default TeamCard
