// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import { useState, useEffect } from 'react'
import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning={true}>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps, router }) {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    // setTimeout(() => setDomLoaded(true), 2000)
    setDomLoaded(true)
  }, [])

  if (domLoaded)
    return (
      <SafeHydrate>
        <Component {...pageProps} key={router.route} />
        <Analytics />
      </SafeHydrate>
    )
}

export default MyApp
