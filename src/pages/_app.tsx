import 'assets/styles/main.scss'
import type { AppProps } from 'next/app'
import { Base } from 'layouts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Base>
      <Component {...pageProps} />
    </Base>
  )
}
