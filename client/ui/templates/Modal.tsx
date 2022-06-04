import React, { ReactNode, useEffect } from 'react'
import styled from 'styled-components'
import { CrossIcon } from '@client/icons'

interface Props {
  children: ReactNode
  title: string
  subtitle: string
  onClose: VoidFunction
}

const Title = styled.h2`
  font-size: 22px;
  font-weight: ${({
    theme: {
      fontWeights: { extraBold },
    },
  }) => extraBold};
`

const Subtitle = styled.p`
  font-size: 13px;
  color: ${({
    theme: {
      colors: { grey },
    },
  }) => grey};
  margin-top: 5px;
  width: 462px;
`

const Cross = styled.img`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`

const Body = styled.div`
  padding: 30px 40px;
`

const Header = styled.header`
  background: ${({ theme: { colors } }) => colors['white-003']};
  padding: 30px 40px;
`

const Position = styled.div`
  width: 640px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${({
    theme: {
      colors: { bg },
    },
  }) => bg};
`

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`

export const ModalTemplate = ({ children, title, subtitle, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <Wrapper>
      <Position>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Cross src={CrossIcon} onClick={onClose} />
        </Header>
        <Body>{children}</Body>
      </Position>
    </Wrapper>
  )
}
