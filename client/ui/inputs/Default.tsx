import React, { ChangeEvent } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  id?: string
  value: string
  name: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  type?: 'number' | 'text'
}

const Component = styled.input`
  ${({
    theme: {
      colors: { grey },
      borderRadius: { mini },
    },
  }) => css`
    color: ${grey};
    border: 1px solid ${grey};
    border-radius: ${mini};
    padding: 11.5px 15px;
  `}
  width: calc(100% - 31px);
`

export const DefaultInput = ({
  id,
  value,
  onChange = () => {},
  name,
  placeholder,
  disabled,
  type,
}: Props) => (
  <Component
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
    type={type}
  />
)

export type { Props as InputProps }
