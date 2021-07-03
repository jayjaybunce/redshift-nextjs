import { extendTheme } from '@chakra-ui/react'

const theme = {
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  colors: {
    brand: {
      800: '#002248',
      dark: '#0E0F13',
    },
    link: {
      nav: {
        active: 'white',
        inactive: 'grey',
      },
    },
  },
}

export const customTheme = extendTheme(theme)
