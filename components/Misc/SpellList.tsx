import React from 'react'
import { List, ListItem, Flex } from '@chakra-ui/react'
import { SpellLink } from './SpellLink'

type SpellListProps = {
  spells: Array<Spell>
}

type Spell = {
  title: string
  id: number
  d: Difficulty
  subSpells?: Array<SpellBase>
}

type SpellBase = {
  title: string
  id: number
  d: Difficulty
}

type Difficulty = 'normal' | 'heroic' | 'mythic'

export const SpellList: React.FC<SpellListProps> = ({ spells }) => {
  return (
    <Flex>
      <List>
        {spells.map((spell, i) => {
          const { title, id, d } = spell
          return (
            <ListItem key={i}>
              <SpellLink key={i} title={title} d={d} id={id} />
              {spell.subSpells
                ? spell.subSpells.map((item, index) => {
                    const subTitle = item.title
                    const subD = item.d
                    const subId = item.id
                    return (
                      <ListItem key={index}>
                        <SpellLink
                          key={index}
                          title={subTitle}
                          d={subD}
                          id={subId}
                        />
                      </ListItem>
                    )
                  })
                : ''}
            </ListItem>
          )
        })}
      </List>
    </Flex>
  )
}
