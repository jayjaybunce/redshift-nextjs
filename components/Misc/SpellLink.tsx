import React from 'react'

const diffMap = {
  normal: 14,
  heroic: 15,
  mythic: 16,
}

export const SpellLink: React.FC<{ id: number; d: string; title: string }> = ({
  id,
  title,
  d,
}) => {
  const difficulty = diffMap[d]
  const href = `https://www.wowhead.com/spell=${id}/${title.toLocaleLowerCase()}?dd=${difficulty}&ddsize=30`
  const data = `spell=${id}&amp;dd=${difficulty}`
  return (
    <a
      href={href}
      data-wowhead={data}
      style={{
        color: 'white',
        textDecoration: 'underline',
      }}
    >
      {title}
    </a>
  )
}
