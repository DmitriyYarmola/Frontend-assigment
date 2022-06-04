import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  children: ReactNode
  onClick?: VoidFunction
  type?: 'button' | 'submit' | 'reset'
  withBackground?: boolean
}

const Component = styled.button`
  ${({
    theme: {
      colors: { white, green },
      borderRadius: { steep },
      fontWeights: { bold },
    },
  }) => css`
    border-radius: ${steep};
    font-weight: ${bold};

    &.withBackground {
      color: ${white};
      background: ${green};
    }
  `}
  cursor: pointer;
  padding: 12px 41px;
`

export const Button = ({ children, onClick, type = 'button', withBackground }: Props) => (
  <Component
    onClick={onClick}
    type={type}
    className={withBackground ? 'withBackground' : ''}
  >
    {children}
  </Component>
)
