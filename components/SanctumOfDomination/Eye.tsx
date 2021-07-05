import React, { useState, useEffect } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { markdownComponents } from '../../utils/markdownComponents'
import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export const Eye: React.FC<any> = () => {
  const [markdown, setMarkdown] = useState('')
  useEffect(() => {
    const getMd = async () => {
      await fetch('/md/eye.md')
        .then((res) => res.text())
        .then((res) => setMarkdown(res))
    }
    getMd()
  })
  return (
    <Flex justify="center">
      <Box color="grey.800" w="6xl" fontFamily="Roboto" pl={16}>
        <ReactMarkdown
          components={markdownComponents}
          remarkPlugins={[gfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {markdown}
        </ReactMarkdown>
      </Box>
    </Flex>
  )
}
