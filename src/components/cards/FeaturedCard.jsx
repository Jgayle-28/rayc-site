import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getDelay } from '@/utils/getDelay'

function FeaturedCard({ ape, index }) {
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
          src={ape.img}
          alt='Rebel Ape'
        />
      </div>
    </motion.div>
  )
}

export default FeaturedCard
