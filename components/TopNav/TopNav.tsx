import React from 'react'
import { Flex, Heading, useTheme, Text } from '@chakra-ui/react'
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
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
        <Heading color="white" fontFamily="orbitron" fontSize={30}>
          <Text color="red.500" display="inline-block">
            Red
          </Text>
          <Text color="white" display="inline-block">
            shift
          </Text>
        </Heading>
        <ArrowLeftIcon color="blue.500" ml={5} />
        <Flex
          display="flex"
          py={4}
          borderLeft="1px solid #0061C0"
          mr="3px"
          ml={4}
        />
        <Flex display="flex" py={4} borderLeft="1px solid #0061C0" mr={4} />
        <ArrowRightIcon color="red.400" mr={5} />
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
                    fontSize={18}
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
                  <ChevronRightIcon color="blue.400" />
                ) : (
                  ''
                )}
              </>
            )
          })}
        </Flex>
      </Flex>
    </>
  )
}
