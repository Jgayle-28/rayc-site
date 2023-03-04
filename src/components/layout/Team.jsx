import React from 'react'
import { teamData } from '@/data/team-data'
import TeamCard from '../cards/TeamCard'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Team() {
  return (
    <div className='py-20' id='team'>
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
          src='/img/headings/meet-the-team.svg'
          alt='meet rebel team'
        />
      </motion.div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {teamData &&
          teamData.map((m, i) => <TeamCard key={i} member={m} index={i} />)}
      </div>
    </div>
  )
}

export default Team
