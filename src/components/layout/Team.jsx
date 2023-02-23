import React from 'react'
import { teamData } from '@/data/team-data'
import TeamCard from '../cards/TeamCard'
import Image from 'next/image'

function Team() {
  return (
    <div className='py-20' id='team'>
      <div className='flex justify-center mb-20'>
        <Image
          className='h-10 w-auto ease-in mt-6'
          width={40}
          height={40}
          src='/img/headings/meet-the-team.svg'
          alt='meet rebel team'
        />
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {teamData && teamData.map((m, i) => <TeamCard key={i} member={m} />)}
      </div>
    </div>
  )
}

export default Team
