import React from 'react'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Heading,
  Text,
  Link,
  Image,
  Box,
} from '@chakra-ui/react'
import { CloseIcon, CheckIcon } from '@chakra-ui/icons'

export const SanctumOfDomination = () => {
  return (
    <Flex justify="center" direction="column" align="center">
      <Flex direction="row" justify="space-around">
        <Heading align="center" py={10} fontSize="6xl" color="blue.400">
          Sanctum Of Domination
        </Heading>
        <Flex direction="column" justify="center" align="center">
          <StyledLink to="https://www.warcraftlogs.com/guild/reports-list/602292">
            <Flex direction="row" align="center" justify="center">
              <Image src="/WLfavicon.png" height="16px" width="16px" />
              <Text ml={2}>WL</Text>
            </Flex>
          </StyledLink>
          <Box
            display="block"
            borderTop="1px solid"
            borderTopColor="blue.400"
            width="10"
            my={2}
          />
          <StyledLink to="https://raider.io/guilds/us/stormrage/Redshift">
            <Flex direction="row" align="center" justify="center">
              <Image src="/RIOfavicon.webp" height="16px" width="16px" />
              <Text ml={2}>RIO</Text>
            </Flex>
          </StyledLink>
        </Flex>
      </Flex>
      <Flex>
        <Tabs>
          <TabList>
            <StyledTab>The Tarragrue</StyledTab>
            <StyledTab>The Eye Of The Jailer</StyledTab>
            <StyledTab>The Nine</StyledTab>
            <StyledTab>Remnant of Ner'zhul</StyledTab>
            <StyledTab>Soulrender Dormazain</StyledTab>
            <StyledTab>Painsmith Raznal</StyledTab>
            <StyledTab>Guardian of the first Ones</StyledTab>
            <StyledTab>Fatescripe Roh-Kalo</StyledTab>
            <StyledTab>Kel'Thuzad</StyledTab>
            <StyledTab>Sylvanas Windrunner</StyledTab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <BossComingSoon title="The Tarragrue" />
            </TabPanel>
            <TabPanel>
              <BossComingSoon title="The Eye of the Jailer" />
            </TabPanel>
            <TabPanel>
              <BossComingSoon title="The Nine" />
            </TabPanel>
            <TabPanel>
              <BossComingSoon title="Remnant of Ner'zhul" />
            </TabPanel>
            <TabPanel>
              <BossComingSoon title="Soulrender Dormazain" />
            </TabPanel>
            <TabPanel>
              <BossComingSoon title="Painsmith Raznal" />
            </TabPanel>
            <TabPanel>
              <BossComingSoon title="Guardian of the First Ones" />
            </TabPanel>
            <TabPanel>
              <BossComingSoon title="Fatescripe Roh-Halo" />
            </TabPanel>
            <TabPanel>
              <BossComingSoon title="Kel'Thuzad" />
            </TabPanel>
            <TabPanel>
              <BossComingSoon title="Sylvannas Windrunner" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  )
}

export const StyledTab: React.FC<{ isDowned?: boolean }> = ({
  children,
  isDowned = false,
}) => {
  return (
    <Tab
      color="white"
      borderTopRadius="3xl"
      _selected={{
        color: 'blue.400',
        bg: 'gray.800',
      }}
      _active={{
        bg: 'none',
      }}
      _focus={{
        boxShadow: 'none',
      }}
    >
      <Flex direction="column" align="center">
        {isDowned ? (
          <CheckIcon color="green.900" />
        ) : (
          <CloseIcon color="red.900" />
        )}
        <Text>{children}</Text>
      </Flex>
    </Tab>
  )
}

const StyledLink: React.FC<{ to: string }> = ({ children, to }) => {
  return (
    <Link color="red.400" href={to}>
      {children}
    </Link>
  )
}

const BossComingSoon: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Flex direction="column" align="center">
      <Heading fontSize={50} color="red.600">
        {title}
      </Heading>
      <Heading fontSize={20} color="white" pt="10">
        The strategy for {title} is coming soon!{' '}
        <Text color="#3FC7EB" display="inline-block">
          Krank
        </Text>{' '}
        is still working on a strategy for this encounter! Check again later.
      </Heading>
    </Flex>
  )
}

export default SanctumOfDomination
