import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Mission() {
  return (
    <>
      <div className='pt-20 pb-40' id='mission'>
        <div className='mt-8 lg:-mx-6 lg:flex lg:items-center'>
          <motion.div
            className='mb-6 md:mb-0 flex flex-col items-center justify-center object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96'
            style={{ backgroundImage: `url('/img/backgrounds/mission.svg')` }}
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
                },
              },
              hidden: { opacity: 0, y: 40 },
            }}
          >
            <Image
              className='h-16 w-auto ease-in -rotate-12'
              width={40}
              height={40}
              src='/img/headings/our.svg'
              alt='meet rebel team'
            />
            <Image
              className='h-16 w-auto ease-in mt-6 -rotate-12'
              width={40}
              height={40}
              src='/img/headings/mission.svg'
              alt='meet rebel team'
            />
          </motion.div>

          <motion.div
            className='lg:w-1/2 lg:mt-0 lg:mx-6 text-gray-300'
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
                    delay: 0.8,
                  },
                  opacity: {
                    duration: 0.7,
                    delay: 0.8,
                  },
                  type: 'spring',
                },
              },
              hidden: { opacity: 0, y: 40 },
            }}
          >
            <p className='pb-3 text-gray-300'>
              The modern rebel is someone who challenges the status quo,
              questions authority, and demands change.
            </p>

            <p className='py-3 text-gray-300'>
              They are a reminder that change is possible, and that the power to
              effect change lies within each of us.
            </p>

            <p className='py-3 text-gray-300'>
              We aim to create unique and compelling digital artworks that
              inspire and captivate & to remind you that you have a rebel in
              you.
            </p>

            <p className='py-3 text-gray-300'>
              We have a very exciting road map for our rebels that includes
            </p>
            <ul>
              <li className='text-gray-300'>
                {' '}
                <Image
                  alt='connect with us'
                  className='h-2 w-auto inline mr-3'
                  width={40}
                  height={40}
                  src='img/bullet.svg'
                />
                Web store that our rebels can access and buy merch.
              </li>
              <li className='text-gray-300'>
                {' '}
                <Image
                  alt='connect with us'
                  className='h-2 w-auto inline mr-3'
                  width={40}
                  height={40}
                  src='img/bullet.svg'
                />
                web3 clubhouse for members
              </li>
              <li className='text-gray-300'>
                {' '}
                <Image
                  alt='connect with us'
                  className='h-2 w-auto inline mr-3'
                  width={40}
                  height={40}
                  src='img/bullet.svg'
                />
                A Rebel clubhouse
              </li>
              <li className='text-gray-300'>
                {' '}
                <Image
                  alt='connect with us'
                  className='h-2 w-auto inline mr-3'
                  width={40}
                  height={40}
                  src='img/bullet.svg'
                />
                Web3 and real-life events for only members.
              </li>
              <li className='text-gray-300'>
                {' '}
                <Image
                  alt='connect with us'
                  className='h-2 w-auto inline mr-3'
                  width={40}
                  height={40}
                  src='img/bullet.svg'
                />
                Spaces in Twitter, German, Italy and English-speaking.
              </li>
              <li className='text-gray-300'>
                {' '}
                <Image
                  alt='connect with us'
                  className='h-2 w-auto inline mr-3'
                  width={40}
                  height={40}
                  src='img/bullet.svg'
                />
                web3 game
              </li>
            </ul>
            <p className='py-3 text-gray-300'>
              Choose your Ape, let's grow together and make the world better.
            </p>

            <a
              href='https://opensea.io/collection/rebelapeyc'
              target='_blank'
              rel='noreferrer'
              className='inline-block mt-2 text-primary hover:text-primary'
            >
              Real rebels break the rules, so we have to mixed M1 & M2. To the
              moon rebels!
            </a>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Mission
