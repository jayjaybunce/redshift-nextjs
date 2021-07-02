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
  Progress,
} from '@chakra-ui/react'
import { CloseIcon, CheckIcon } from '@chakra-ui/icons'

export const SanctumOfDomination = () => {
  return (
    <Flex justify="center" direction="column" align="center" pt={10}>
      <Flex direction="row" justify="space-around">
        <Heading
          align="center"
          py={10}
          fontSize="6xl"
          color="white"
          fontFamily="LifeCraft"
        >
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
            <StyledTab img="tarragrueBig.png" title="The Tarragrue" />
            <StyledTab
              img="eyeOfTheJailerBig.png"
              title="The Eye Of The Jailer"
            />
            <StyledTab img="theNine.png" title="The Nine" />
            <StyledTab img="nerzhul.png" title="Remnant of Ner'zhul" />
            <StyledTab img="dormazainBig.png" title="Soulrender Dormazain" />
            <StyledTab img="raznal.png" title="Painsmith Raznal" />
            <StyledTab
              img="guardianBig.png"
              title="Guardian of the first Ones"
            />
            <StyledTab img="rohKalo.png" title="Fatescribe Roh-Kalo" />
            <StyledTab img="kelThuzad.png" title="Kel'Thuzad" />
            <StyledTab img="sylvanasBig.png" title="Sylvannas Windrunner" />
          </TabList>
          <TabPanels mt={12}>
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

export const StyledTab: React.FC<{
  isDowned?: boolean
  img: string
  title: string
  percentage?: number
}> = ({ title, img, isDowned = false, percentage = 0 }) => {
  return (
    <Tab
      color="white"
      borderTopRadius="3xl"
      _selected={{
        color: 'blue.400',
      }}
      _active={{
        bg: 'none',
      }}
      _focus={{
        boxShadow: 'none',
      }}
    >
      <Flex
        height="5rem"
        direction="column"
        align="center"
        justify="space-between"
        backgroundPosition="50% 5%"
        backgroundImage={img}
        backgroundSize="cover"
      >
        <Flex mt="-2rem">
          {isDowned ? (
            <CheckIcon color="green.900" />
          ) : (
            <CloseIcon color="red.900" />
          )}
        </Flex>
        <Flex direction="column" mb="-1.8rem">
          <Progress
            width="full"
            size="xs"
            colorScheme="red"
            isIndeterminate={percentage === 0 ? true : false}
            value={percentage}
          />
          <Text>{title}</Text>
        </Flex>
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
      <Heading fontSize={50} color="gray.200" fontFamily="LifeCraft">
        {title}
      </Heading>
      <hr />
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
