import 'assets/styles/main.scss'
import type { AppProps } from 'next/app'
import { Base } from 'layouts'
import { wrapper } from 'store'
import { Provider } from 'react-redux'

const App = ({ Component, pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps)
  return (
    <Provider store={store}>
      <Base>
        <Component {...props.pageProps} />
      </Base>
    </Provider>
  )
}

export default App
