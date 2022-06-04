import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  icon: string
  name: string
  value: string
}

const Icon = styled.img`
  width: 42px;
  height: 60px;
`
const Content = styled.div`
  margin-right: 25px;
`
const Value = styled.p`
  font-size: ${({
    theme: {
      fontSizes: { extraBig },
    },
  }) => extraBig};
`
const Name = styled.p`
  font-weight: ${({
    theme: {
      fontWeights: { semiBold },
    },
  }) => semiBold};
  margin-top: 10px;
`

const Card = styled.div`
  display: flex;
  ${({
    theme: {
      contentPositions: { spaceBetween, center },
      colors,
      borderRadius,
    },
  }) => css`
    justify-content: ${spaceBetween};
    align-items: ${center};
    background: ${colors['white-003']};
    border-radius: ${borderRadius.smooth};
  `};
  padding: 30px 36px;
  width: 225px;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    ${Name}, ${Value} {
      transition: all 0.2s linear;
      text-shadow: ${({ theme: { textShadows } }) => textShadows.default};
    }
  }
`

export const SectorCard = ({ icon, name, value }: Props) => (
  <Card>
    <Content>
      <Value>{value}</Value>
      <Name>{name}</Name>
    </Content>
    <Icon src={icon} />
  </Card>
)
