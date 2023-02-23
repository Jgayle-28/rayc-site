import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='relative bg-blueGray-200 pt-8 pb-6'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center flex-wrap text-left lg:text-left'>
          <div className='w-full lg:w-6/12 px-4 flex flex-col items-center justify-center'>
            <h4 className='text-3xl font-semibold text-blueGray-700 mb-2 text-primary'>
              <Image
                alt='connect with us'
                className='h-4 w-auto ease-in mb-2hover:transform hover:scale-105 duration-150'
                width={40}
                height={40}
                src='img/headings/connect.svg'
              />
            </h4>
            <div className='mt-6 lg:mb-0 mb-6'>
              <div className='flex justify-center'>
                <a
                  className='text-white duration-150 mr-3'
                  aria-label='twitter'
                  href='https://twitter.com/RebelApeYC'
                  target='_blank'
                >
                  <Image
                    className='h-12 w-auto ease-in mb-10  hover:transform hover:scale-105 duration-150'
                    width={40}
                    height={40}
                    src='/img/buttons/twitter.svg'
                    alt='discord'
                  />
                </a>
                <a
                  className='text-white duration-150'
                  aria-label='discord'
                  href='https://discord.gg/Zpcz3JDZMD'
                  target='_blank'
                >
                  <Image
                    className='h-12 w-auto ease-in mb-10  hover:transform hover:scale-105 duration-150'
                    width={40}
                    height={40}
                    src='/img/buttons/discord.svg'
                    alt='discord'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
            <div className='text-sm text-blueGray-500 font-light py-1'>
              Copyright © <span id='get-current-year'>2023 </span>
              RAYC
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
