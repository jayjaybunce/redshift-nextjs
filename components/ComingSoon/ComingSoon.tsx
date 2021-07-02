import { Flex, Heading, Text, Image } from '@chakra-ui/react'

export const ComingSoon: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <Flex direction="row" align="center" justify="center" mt={5}>
      <Flex direction="column" color="gray.200">
        <Heading>{title}</Heading>
        <Text width="xl">
          Sorry! This page seems to be stuck on the flight path from Rut'Theran
          Village to Gadgetzan! Come back again to see if it's landed yet. If
          you have any ideas for this page please DM Krank.
        </Text>
      </Flex>
      <Flex>
        <Image src="/flightpath.png" scale="0.75" />
      </Flex>
    </Flex>
  )
}
