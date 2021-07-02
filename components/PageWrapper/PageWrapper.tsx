import React from 'react'
import { Container } from '@chakra-ui/react'
import { TopNav } from '../TopNav/TopNav'
import Head from 'next/head'

type PageWrapperProps = {
  maxWidth: string
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  maxWidth,
  children,
}) => {
  try {
    let bodyEl
    if (window && document) {
      bodyEl = document.querySelector('body')
    }
    if (bodyEl) {
      bodyEl.style.background = '#002248'
    }
  } catch (e) {
    console.error(e)
  }
  return (
    <Container maxW={maxWidth} padding={0}>
      <Head>
        <script>
          const whTooltips =
          {` colorLinks: true, iconizeLinks: true, renameLinks: true `};
        </script>
        <script src="https://wow.zamimg.com/widgets/power.js"></script>
      </Head>
      <TopNav
        menuLinks={[
          { title: 'Home', route: '/', isImportant: false },
          { title: 'Roster', route: '/roster', isImportant: false },
          {
            title: '9.1',
            route: '/sanctum-of-domination',
            isImportant: true,
          },
        ]}
      />
      {children}
    </Container>
  )
}
