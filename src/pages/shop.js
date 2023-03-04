import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const shop = () => {
  return (
    <div className='h-screen'>
      <motion.div
        className='flex justify-center w-full'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              y: {
                ease: 'easeOut',
                duration: 0.7,
                delay: 0.1,
              },
              opacity: {
                duration: 0.7,
                delay: 0.1,
              },
              type: 'spring',
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <Image
          className='h-12 w-auto mt-16'
          width={40}
          height={40}
          src='/img/headings/shop.svg'
          alt='rebel'
        />
      </motion.div>
      <motion.div
        className='flex justify-center w-full mt-40 mb-20'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              y: {
                ease: 'easeOut',
                duration: 0.7,
                delay: 0.4,
              },
              opacity: {
                duration: 0.7,
                delay: 0.4,
              },
              type: 'spring',
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <Image
          priority
          className='h-40 w-auto'
          width={40}
          height={40}
          src='/img/backgrounds/coming-soon.svg'
          alt='rebel'
        />
      </motion.div>
      <motion.div
        className='text-center'
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
                ease: 'easeOut',
                duration: 0.7,
                delay: 1,
              },
              opacity: {
                duration: 0.7,
                delay: 1,
              },
              type: 'spring',
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <Link href='/' className='font-semibold text-primary'>
          Home
        </Link>
      </motion.div>
    </div>
  )
}

export default shop
