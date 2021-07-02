import React, { useState } from 'react'
import { Flex, Heading, useTheme, IconButton } from '@chakra-ui/react'
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
} from '@chakra-ui/icons'
import { useRouter } from 'next/router'

type MenuLink = {
  title: string
  route: string
  isImportant: boolean
}

type TopNavProps = {
  menuLinks: Array<MenuLink>
}

export const TopNav: React.FC<TopNavProps> = ({ menuLinks }) => {
  const [isHeaderActive, setIsHeaderActive] = useState(true)
  const [isHeaderHover, setIsHeaderHover] = useState(false)

  const theme = useTheme()
  const router = useRouter()
  return (
    <>
      <Flex
        w="100%"
        bg={theme.colors.brand.dark}
        height={12}
        borderBottom="2px solid"
        borderBottomColor="blue.400"
        px={5}
        align="center"
      >
        <Heading color="white">Redshift</Heading>
        <ArrowLeftIcon color="red.400" ml={5} />
        <Flex
          display="flex"
          py={4}
          borderLeft="1px solid #0061C0"
          mr="3px"
          ml={4}
        />
        <Flex display="flex" py={4} borderLeft="1px solid #0061C0" mr={4} />
        <ArrowRightIcon color="blue.400" mr={5} />
        <Flex align="center">
          {menuLinks.map((link, i) => {
            const isRouteActive = router.asPath === link?.route
            return (
              <>
                <a href={link?.route} key={i}>
                  <Flex
                    key={i}
                    align="center"
                    mx={2}
                    fontSize={15}
                    fontWeight="300"
                    transition="0.2s ease all"
                    _hover={{
                      borderBottom: `1px solid ${theme.colors.link.nav.active}`,
                      color: theme.colors.link.nav.active,
                    }}
                    color={
                      isRouteActive
                        ? theme.colors.link.nav.active
                        : theme.colors.link.nav.inactive
                    }
                    borderBottom={
                      isRouteActive
                        ? `1px solid ${theme.colors.link.nav.active}`
                        : `1px solid ${theme.colors.brand.dark}`
                    }
                  >
                    {link?.title}
                  </Flex>
                </a>
                {i < menuLinks.length - 1 ? (
                  isRouteActive ? (
                    <ChevronLeftIcon color="blue.400" />
                  ) : (
                    <ChevronRightIcon color="blue.400" />
                  )
                ) : (
                  ''
                )}
              </>
            )
          })}
        </Flex>
      </Flex>
      <Flex
        onMouseEnter={() => setIsHeaderHover(true)}
        onMouseLeave={() => setIsHeaderHover(false)}
        width="100"
        display="flex"
        backgroundImage="/idk.jpg"
        height={isHeaderActive ? 56 : 5}
        transition="0.3s ease all"
        backgroundPosition="50% 5%"
        borderBottomColor="blue.400"
        borderBottomWidth="2px"
        borderBottomStyle="solid"
      >
        <IconButton
          aria-label="toggle header"
          background="none"
          padding={0}
          height="16px"
          width="16px"
          _hover={{
            background: 'none',
          }}
          _focus={{
            boxShadow: 'none',
          }}
          _active={{
            background: 'none',
          }}
          display={isHeaderHover ? 'block' : 'none'}
          onClick={() => {
            if (isHeaderActive) {
              setIsHeaderActive(false)
            } else {
              setIsHeaderActive(true)
            }
          }}
          icon={
            isHeaderActive ? (
              <ChevronUpIcon color="white" />
            ) : (
              <ChevronDownIcon color="white" />
            )
          }
        />
      </Flex>
    </>
  )
}
