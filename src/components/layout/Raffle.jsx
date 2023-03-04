import React from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'

function Raffle() {
  return (
    <div className='pt-20 pb-20  w-full'>
      <motion.div
        className='flex flex-col items-center'
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
            },
          },
          hidden: { opacity: 0, y: 40 },
        }}
      >
        <Image
          className='h-16 w-auto hover:-rotate-3 ease-in duration-100 mb-10'
          width={40}
          height={40}
          src='/img/headings/win-lambo.svg'
          alt='discord'
        />

        <motion.p
          className='text-lg md:text-xl text-primary font-medium mb-6 text-center'
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
              },
            },
            hidden: { opacity: 0, y: 40 },
          }}
        >
          Become a Rebel and enter for a chance to win a lambo.
        </motion.p>
      </motion.div>
      <motion.div
        className='w-full bg-cover bg-center py-20'
        style={{ backgroundImage: `url('/img/backgrounds/raffle.svg')` }}
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
                delay: 0.6,
              },
              opacity: {
                duration: 0.7,
                delay: 0.6,
              },
              type: 'spring',
            },
          },
        }}
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
        </div>
      </motion.div>
    </div>
  )
}

export default Raffle
