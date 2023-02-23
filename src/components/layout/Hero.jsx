import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  arrowVariants,
  headerVariants,
  rebelVariants,
  socialVariants,
  tag1variants,
  tag2variants,
} from '@/constants/hero-variants'

function Hero() {
  return (
    <div className='pb-20 h-screen flex justify-center w-full'>
      <motion.div
        variants={headerVariants}
        initial={'hidden'}
        animate={'visible'}
        className='flex flex-col items-center justify-center py-12 px-12 w-full bg-cover bg-center bg-no-repeat h-full'
        style={{ backgroundImage: `url('/img/backgrounds/hero.svg')` }}
      >
        <motion.div
          variants={tag1variants}
          initial={'hidden'}
          animate={'visible'}
        >
          <Image
            className='h-16 w-auto ease-in  mt-16'
            width={40}
            height={40}
            src='/img/headings/choose.svg'
            alt='rebel'
          />
        </motion.div>

        <motion.div
          variants={tag2variants}
          initial={'hidden'}
          animate={'visible'}
          className='my-8 '
        >
          <Image
            className='h-16 w-auto ease-in'
            width={40}
            height={40}
            src='/img/headings/become.svg'
            alt='rebel'
          />
        </motion.div>
        <motion.div
          variants={rebelVariants}
          initial={'hidden'}
          animate={'visible'}
        >
          <Image
            className='h-28 w-auto ease-in mb-10 hover:-rotate-6 ease-in duration-150 mt-6'
            width={40}
            height={40}
            src='/img/headings/rebel.svg'
            alt='rebel'
          />
        </motion.div>

        <motion.div
          variants={socialVariants}
          initial={'hidden'}
          animate={'visible'}
          className='flex items-center flex-col mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 text-center lg:w-7/12'
        >
          <div className='flex justify-center'>
            <a
              className='text-white duration-150 mr-3'
              aria-label='twitter'
              href='https://twitter.com/RebelApeYC'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className='h-16 w-auto ease-in mb-10  hover:transform hover:scale-105 duration-150'
                width={40}
                height={40}
                src='/img/buttons/twitter.svg'
                alt='twitter'
              />
            </a>
            <a
              className='text-white duration-150'
              aria-label='discord'
              href='https://discord.gg/Zpcz3JDZMD'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className='h-16 w-auto ease-in mb-10  hover:transform hover:scale-105 duration-150'
                width={40}
                height={40}
                src='/img/buttons/discord.svg'
                alt='discord'
              />
            </a>
          </div>
          <motion.a
            variants={arrowVariants}
            initial={'hidden'}
            animate={'visible'}
            href='#featured'
          >
            <Image
              className='h-14 w-auto ease-in mb-10 hover:translate-y-2 ease-in duration-150 mt-6'
              width={40}
              height={40}
              src='/img/buttons/arrow-down.svg'
              alt='rebel'
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
