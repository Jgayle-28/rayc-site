import Head from 'next/head'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/layout/Hero'
import Featured from '@/components/layout/Featured'
import Mission from '@/components/layout/Mission'
import Raffle from '@/components/layout/Raffle'
import Team from '@/components/layout/Team'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rebel Ape Yacht Club</title>
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
