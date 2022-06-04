import React from 'react'
import styled from 'styled-components'
import { DefaultInput, InputProps } from './Default'

interface Props extends InputProps {
  label: string
}

const Label = styled.label`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  right: 11px;
  font-size: 15px;
`
const Component = styled.div`
  position: relative;
`

export const WithLabel = ({ label, ...inputProps }: Props) => (
  <Component>
    <DefaultInput {...inputProps} />
    <Label htmlFor={inputProps.id}>{label}</Label>
  </Component>
)
