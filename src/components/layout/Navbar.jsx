import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { navbarVariants } from '@/constants/navbar-variants'
import Link from 'next/link'

function Navbar() {
  const getVariants = (delay) => {
    return {
      hidden: { opacity: 0, y: 15 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          y: {
            duration: 0.3,
            delay: delay,
          },
          opacity: {
            duration: 0.3,
            delay: delay,
          },
          type: 'spring',
          damping: 30,
          stiffness: 300,
        },
      },
    }
  }
  return (
    <motion.div
      variants={navbarVariants}
      initial={'hidden'}
      animate={'visible'}
    >
      <div className='flex justify-center items-center w-full fixed z-10 bg-rebel-black pb-6'>
        <div className='flex h-16 items-center justify-center'>
          <div className='flex flex-1 items-center justify-center'>
            <div className=' sm:ml-6 sm:block'>
              <div className='pt-10 flex items-center space-x-4'>
                <Link href='/shop' className='m-0 pt-2.5 '>
                  <motion.span
                    className='relative w-max text-sm pt-2.5 px-2 group text-gray-300 z-10 hover:text-white cursor-pointer'
                    aria-current='page'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    variants={{ ...getVariants(5.85) }}
                  >
                    Store
                    <span
                      className={`absolute -z-10 left-0 -bottom-1.5 w-full transition-all bg-primary group-hover:h-1 h-0 cursor-pointer
                     `}
                    ></span>
                  </motion.span>
                </Link>

                <motion.a
                  href='#team'
                  className='hidden md:block relative w-max text-sm pt-2.5 px-2 group text-gray-300 z-10 hover:text-white'
                  aria-current='page'
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  variants={{ ...getVariants(6) }}
                >
                  Team
                  <span
                    className={`absolute -z-10 left-0 -bottom-1 w-full transition-all bg-primary group-hover:h-1 h-0
                    `}
                  ></span>
                </motion.a>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  variants={{ ...getVariants(6.15) }}
                >
                  <Link href='/'>
                    <Image
                      className='h-11 w-auto px-3 py-2 hover:text-primary'
                      width={12}
                      height={12}
                      src='/img/logo/rayc-white.svg'
                      alt='rebel apes logo'
                    />
                  </Link>
                </motion.div>

                <motion.a
                  href='#mission'
                  className='hidden md:block relative w-max text-sm pt-2.5 px-2 group text-gray-300 z-10 hover:text-white'
                  aria-current='page'
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  variants={{ ...getVariants(6.3) }}
                >
                  Mission
                  <span
                    className={` absolute -z-10 left-0 -bottom-1 w-full transition-all bg-primary group-hover:h-1 h-0
                    `}
                  ></span>
                </motion.a>

                <motion.a
                  href='https://opensea.io/collection/rebelapeyc'
                  target='_blank'
                  rel='noreferrer'
                  className='relative w-max text-sm pt-2.5 px-2 group text-gray-300 z-10 hover:text-white'
                  aria-current='page'
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  variants={{ ...getVariants(6.45) }}
                >
                  Apes
                  <span
                    className={`absolute -z-10 left-0 -bottom-1 w-full transition-all bg-primary group-hover:h-1 h-0
                    `}
                  ></span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
