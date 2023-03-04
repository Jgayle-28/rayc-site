import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getDelay } from '@/utils/getDelay'

function TeamCard({ member, index }) {
  return (
    <motion.div
      className='rounded-xl bg-card-dark p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 '
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            y: {
              duration: 0.3,
              delay: getDelay(index),
            },
            opacity: {
              duration: 0.3,
              delay: getDelay(index),
            },
            type: 'spring',
            damping: 30,
            stiffness: 300,
          },
        },
      }}
    >
      <div className='relative flex items-end overflow-hidden rounded-xl'>
        <Image
          className='h-full w-auto'
          width={400}
          height={100}
          src={member.profilePic}
          alt='Rebel Ape'
        />
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
        <a href={member.twitter} target='_blank' rel='noreferrer'>
          <Image
            className='h-14 w-auto ease-in mb-10 hover:transform hover:scale-105 duration-150'
            width={40}
            height={40}
            src='/img/buttons/twitter-profile.svg'
            alt='rebel'
          />
        </a>
      </div>
    </motion.div>
  )
}

export default TeamCard
