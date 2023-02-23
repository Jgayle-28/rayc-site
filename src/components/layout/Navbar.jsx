import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { navbarVariants } from '@/constants/navbar-variants'

function Navbar() {
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
                <a
                  href='#'
                  className='relative w-max text-sm pt-2.5 px-2 group text-gray-300 z-10 hover:text-white cursor-pointer'
                  aria-current='page'
                >
                  Store
                  <span
                    className={`absolute -z-10 left-0 -bottom-1 w-full transition-all bg-primary group-hover:h-1 h-0 cursor-pointer
                     `}
                  ></span>
                </a>

                <a
                  href='#team'
                  className='relative w-max text-sm pt-2.5 px-2 group text-gray-300 z-10 hover:text-white'
                  aria-current='page'
                >
                  Team
                  <span
                    className={`absolute -z-10 left-0 -bottom-1 w-full transition-all bg-primary group-hover:h-1 h-0
                    `}
                  ></span>
                </a>

                <Image
                  className='h-11 w-auto px-3 py-2 hover:text-primary'
                  width={12}
                  height={12}
                  src='/img/logo/rayc-white.svg'
                  alt='rebel apes logo'
                />
                <a
                  href='#mission'
                  className='relative w-max text-sm pt-2.5 px-2 group text-gray-300 z-10 hover:text-white'
                  aria-current='page'
                >
                  Mission
                  <span
                    className={`absolute -z-10 left-0 -bottom-1 w-full transition-all bg-primary group-hover:h-1 h-0
                    `}
                  ></span>
                </a>

                <a
                  href='https://opensea.io/collection/rebelapeyc'
                  target='_blank'
                  className='relative w-max text-sm pt-2.5 px-2 group text-gray-300 z-10 hover:text-white'
                  aria-current='page'
                >
                  Apes
                  <span
                    className={`absolute -z-10 left-0 -bottom-1 w-full transition-all bg-primary group-hover:h-1 h-0
                    `}
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
