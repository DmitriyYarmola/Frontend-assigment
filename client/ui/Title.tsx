import React from 'react'
import styled, { css } from 'styled-components'

interface Props {}

const Text = styled.h3`
  ${({
    theme: {
      colors: { text },
      fontSizes: { big },
    },
  }) => css`
    color: ${text};
    font-size: ${big};
  `}
`

export const Title: React.FC<Props> = ({ children }) => <Text>{children}</Text>
