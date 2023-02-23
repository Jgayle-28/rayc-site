// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning={true}>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
      <Analytics />
    </SafeHydrate>
  )
}

export default MyApp
