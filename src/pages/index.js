import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/layout/Hero'
import Featured from '@/components/layout/Featured'
import Mission from '@/components/layout/Mission'
import Raffle from '@/components/layout/Raffle'
import Team from '@/components/layout/Team'
import Footer from '@/components/layout/Footer'
import { useState, useEffect } from 'react'

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (domLoaded)
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Rebel Ape Yacht Club' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Navbar />
        <div className={`relative px-6 md: px-10 mx-auto`}>
          <Hero />
          <Featured />
          <Mission />
          <Raffle />
          <Team />
        </div>
        <Footer />
      </>
    )
}
