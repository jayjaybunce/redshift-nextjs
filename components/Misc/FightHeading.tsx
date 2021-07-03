import React from 'react'
import { Heading } from '@chakra-ui/react'

export const FightHeading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Heading fontFamily="LifeCraft" color="white" fontSize={50}>
      {title}
    </Heading>
  )
}
