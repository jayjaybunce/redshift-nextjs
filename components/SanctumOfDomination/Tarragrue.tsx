import React, { useState, useEffect } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { markdownComponents } from '../../utils/markdownComponents'
import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export const Tarragrue: React.FC<any> = () => {
  const [markdown, setMarkdown] = useState('')
  useEffect(() => {
    const getMd = async () => {
      await fetch('/md/tarragrue.md')
        .then((res) => res.text())
        .then((res) => setMarkdown(res))
    }
    getMd()
  })
  return (
    <Flex justify="center">
      <Box
        color="white"
        w="6xl"
        bg="gray.900"
        fontFamily="Roboto"
        p={10}
        boxShadow="14px 20px 14px -5px #000000"
      >
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
