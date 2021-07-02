import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '../theme'
require('typeface-orbitron')
import '../font.css'

import { PageWrapper } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <PageWrapper maxWidth="full">
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  )
}
export default MyApp
