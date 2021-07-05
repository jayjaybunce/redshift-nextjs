import { Heading, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { ReactMarkdownProps } from 'react-markdown/src/ast-to-react'
import styled from 'styled-components'
import Image from 'next/image'

type Levels = '1' | '2' | '3' | '4' | '5' | '6'
type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const StyledUl = styled.ul`
  padding-inline-start: 2.6rem;
  li:first-of-type {
    margin-top: 0;
    padding-top: 2px;
    margin-top: 0.2rem;
  }
  p {
    padding-top: 2px;
  }
  margin: 0;
`
const StyledOl = styled.ul`
  padding-inline-start: 2.6rem;
  li:first-of-type {
    margin-top: 0;
    padding-top: 2px;
    margin-top: 0.2rem;
  }
  p {
    padding-top: 2px;
  }
  margin: 0;
`

const headingSizes = {
  h1: '40px',
  h2: '24px',
  h3: '22px',
  h4: '20px',
  h5: '18px',
  h6: '16px',
}

const getHeadingProps = (level: Levels) => {
  const headingLevel = `h${level}` as HeadingType
  return {
    as: headingLevel,
    fontSize: headingSizes[headingLevel],
    fontFamily: 'Roboto',
    fontWeight: '600',
    marginTop: '0.5rem',
    color: 'gray.800',
  }
}

export const markdownComponents = {
  p({ children }: { children: React.ReactNode }) {
    return <Text>{children}</Text>
  },
  h1({ level, children }: { level: any; children: React.ReactNode }) {
    const headingProps = getHeadingProps(level)
    return (
      <Heading
        {...headingProps}
        _notFirst={{ pt: 6 }}
        fontFamily="LifeCraft"
        _first={{ fontFamily: 'LifeCraft', fontSize: 60, align: 'center' }}
      >
        {children}
      </Heading>
    )
  },
  h2({ level, children }: { level: any; children: React.ReactNode }) {
    const headingProps = getHeadingProps(level)
    return (
      <Heading {...headingProps} _notFirst={{ pt: 6 }}>
        {children}
      </Heading>
    )
  },
  h3({ level, children }: { level: any; children: React.ReactNode }) {
    const headingProps = getHeadingProps(level)
    return (
      <Heading {...headingProps} _notFirst={{ pt: 6 }}>
        {children}
      </Heading>
    )
  },
  h4({ level, children }: { level: any; children: React.ReactNode }) {
    const headingProps = getHeadingProps(level)
    return (
      <Heading {...headingProps} _notFirst={{ pt: 6 }}>
        {children}
      </Heading>
    )
  },
  h5({ level, children }: { level: any; children: React.ReactNode }) {
    const headingProps = getHeadingProps(level)
    return (
      <Heading {...headingProps} _notFirst={{ pt: 6 }}>
        {children}
      </Heading>
    )
  },
  h6({ level, children }: { level: any; children: React.ReactNode }) {
    const headingProps = getHeadingProps(level)
    return (
      <Heading {...headingProps} _notFirst={{ pt: 6 }}>
        {children}
      </Heading>
    )
  },
  ul({ children }: { children: React.ReactNode }) {
    return <StyledUl>{children}</StyledUl>
  },
  ol({ children }: { children: React.ReactNode }) {
    return <StyledOl>{children}</StyledOl>
  },
  hr() {
    return <hr style={{ marginTop: '2.1rem', width: '90%' }} />
  },
  a(props: ReactMarkdownProps) {
    if (
      !props?.node?.properties?.href ||
      typeof props.node.properties.href !== 'string'
    ) {
      return <></>
    }
    return (
      <a
        href={props?.node?.properties?.href}
        rel="noreferrer"
        target="_blank"
        style={{
          color: '#D44C46',
        }}
      >
        {props.children}
      </a>
    )
  },
  blockquote(props: ReactMarkdownProps) {
    return (
      <Flex p={5}>
        <Flex
          ml="2rem"
          pl={2}
          py={3}
          borderLeft="2px solid"
          borderLeftColor="#D44C46"
          align="center"
        >
          {props.children}
        </Flex>
      </Flex>
    )
  },
  img(props) {
    return <Image src={`/${props.src}`} height="400px" width="800px" />
  },
  br() {
    return (
      <>
        <div
          style={{
            height: '2rem',
          }}
        ></div>
      </>
    )
  },
}
