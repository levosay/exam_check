import 'assets/styles/main.scss'
import type { AppProps } from 'next/app'
import { Base } from 'layouts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Base>
        <Component {...pageProps} />
      </Base>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
