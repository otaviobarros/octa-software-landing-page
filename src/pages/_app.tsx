import { NextPage } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default MyApp
