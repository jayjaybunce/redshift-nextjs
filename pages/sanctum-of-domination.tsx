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
} from '@chakra-ui/react'
import { Tarragrue, Eye } from '../components'
import { CloseIcon, CheckIcon } from '@chakra-ui/icons'

type Encounter = {
  title: string
  mdSrc: string
  isDowned?: boolean
  imgSrc: string
  component?: React.ReactNode
}

type SanctumOfDominationProps = {
  encounters: Array<Encounter>
}

export const SanctumOfDomination: React.FC<SanctumOfDominationProps> = ({
  encounters,
}) => {
  return (
    <Flex justify="center" direction="column" align="center" pt={10}>
      <Flex direction="column" justify="space-around">
        <Heading
          pt={10}
          align="center"
          fontSize="6xl"
          color="grey.800"
          fontFamily="LifeCraft"
        >
          Sanctum Of Domination
        </Heading>
        <Flex direction="row" justify="center" align="center" pb={10}>
          <StyledLink to="https://www.warcraftlogs.com/guild/reports-list/602292">
            <Flex direction="row" align="center" justify="center">
              <Image src="/WLfavicon.png" height="16px" width="16px" />
              <Text ml={2}>Warcraft Logs</Text>
            </Flex>
          </StyledLink>
          <StyledLink to="https://raider.io/guilds/us/stormrage/Redshift">
            <Flex direction="row" align="center" justify="center" pl={4}>
              <Image src="/RIOfavicon.webp" height="16px" width="16px" />
              <Text ml={2}>RaiderIO</Text>
            </Flex>
          </StyledLink>
        </Flex>
      </Flex>
      <Flex pt={10} align="center">
        <Tabs orientation="vertical">
          <TabList>
            {encounters?.map((item, i) => {
              return (
                <StyledTab key={i} img={item?.imgSrc} title={item?.title} />
              )
            })}
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
          <TabPanels>
            {encounters?.map((item, i) => {
              return (
                <TabPanel key={i}>
                  {item?.component ? (
                    item?.component
                  ) : (
                    <BossComingSoon title={item?.title} />
                  )}
                </TabPanel>
              )
            })}
            <TabPanel w="6xl" p={0}>
              <Tarragrue />
            </TabPanel>
            <TabPanel w="6xl">
              <Eye />
            </TabPanel>
            <TabPanel w="6xl">
              <BossComingSoon title="The Nine" />
            </TabPanel>
            <TabPanel w="6xl">
              <BossComingSoon title="Remnant of Ner'zhul" />
            </TabPanel>
            <TabPanel w="6xl">
              <BossComingSoon title="Soulrender Dormazain" />
            </TabPanel>
            <TabPanel w="6xl">
              <BossComingSoon title="Painsmith Raznal" />
            </TabPanel>
            <TabPanel w="6xl">
              <BossComingSoon title="Guardian of the First Ones" />
            </TabPanel>
            <TabPanel w="6xl">
              <BossComingSoon title="Fatescripe Roh-Halo" />
            </TabPanel>
            <TabPanel w="6xl">
              <BossComingSoon title="Kel'Thuzad" />
            </TabPanel>
            <TabPanel w="6xl">
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
}> = ({ title, img, isDowned = false }) => {
  return (
    <Tab
      color="gray.800"
      _selected={{
        color: 'blue.400',
      }}
      _active={{
        bg: 'none',
      }}
      _focus={{
        boxShadow: 'none',
      }}
      p={2}
    >
      <Image src={img} width="10rem" zIndex={2} />
      <Flex
        zIndex={1}
        bg="gray.900"
        direction="column"
        align="center"
        justify="space-between"
        width="25rem"
        height="10rem"
        p={2}
        ml={-20}
        flex={1}
        borderRightRadius="3xl"
      >
        <Flex direction="column" align="center">
          <Text color="white" fontSize={20}>
            {title}
          </Text>
          {isDowned ? (
            <CheckIcon
              color="green.900"
              w={6}
              h={6}
              position="absolute"
              mr="-17.9rem"
              mt="4rem"
            />
          ) : (
            <CloseIcon
              w={6}
              h={6}
              color="red.400"
              position="absolute"
              mr="-17.9rem"
              mt="4rem"
            />
          )}
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
