import React from 'react'
import Image from 'next/image'
import FeaturedCard from '../cards/FeaturedCard'
import { motion } from 'framer-motion'
import { featuredData } from '@/data/featured-data'

function Featured() {
  return (
    <>
      <div className='pt-20 pb-32' id='featured'>
        <motion.div
          className='flex justify-center mb-20'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                y: {
                  ease: 'easeOut',
                  duration: 0.7,
                  delay: 0.2,
                },
                opacity: {
                  duration: 0.7,
                  delay: 0.2,
                },
                type: 'spring',
                staggerChildren: 0.15,
              },
            },
            hidden: { opacity: 0, y: 40 },
          }}
        >
          <Image
            className='h-10 w-auto ease-in mt-6'
            width={40}
            height={40}
            src='/img/headings/meet.svg'
            alt='rebel'
          />
        </motion.div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 '>
          {featuredData &&
            featuredData.map((a, i) => (
              <FeaturedCard key={i} ape={a} index={i} />
            ))}
        </div>
        <motion.div
          className='flex justify-center mt-20'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                y: {
                  ease: 'easeOut',
                  duration: 0.7,
                  delay: 0.2,
                },
                opacity: {
                  duration: 0.7,
                  delay: 0.2,
                },
                type: 'spring',
                staggerChildren: 0.15,
              },
            },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <a
            className='text-white duration-150'
            href='https://opensea.io/collection/rebelapeyc'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              className='h-16 w-auto ease-in mb-10  hover:transform hover:scale-105 duration-150'
              width={40}
              height={40}
              src='/img/buttons/become-a-rebel.svg'
              alt='discord'
            />
          </a>
        </motion.div>
      </div>
    </>
  )
}

export default Featured
