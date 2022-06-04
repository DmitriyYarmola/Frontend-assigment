import React from 'react'
import styled from 'styled-components'
import { DefaultInput, InputProps, Select, SelectProps, WithLabel } from '@client/ui'
import { FieldTypesEnum } from './enums'

interface Props extends Partial<InputProps>, Partial<SelectProps> {
  fieldType: FieldTypesEnum
  error?: string
  label?: string
  miniLabel?: string
}

const Error = styled.p`
  position: absolute;
  bottom: -20px;
  color: ${({
    theme: {
      colors: { pink },
    },
  }) => pink};
`
const Label = styled.label`
  display: grid;
  grid-row-gap: 5px;
`
const Component = styled.div`
  position: relative;
`

export const Field = ({
  fieldType,
  id,
  type,
  value = '',
  onChange,
  onSelect = () => {},
  name = '',
  placeholder,
  disabled,
  options = [],
  error,
  label,
  miniLabel = '',
}: Props) => {
  const getFieldByType = () => {
    switch (fieldType) {
      case FieldTypesEnum.Input:
        return (
          <DefaultInput
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
          />
        )
      case FieldTypesEnum.WithLabel:
        return (
          <WithLabel
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            label={miniLabel}
          />
        )
      case FieldTypesEnum.Select:
        return (
          <Select
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            options={options}
            onSelect={onSelect}
          />
        )
      default:
        return <span>Field type is not supported</span>
    }
  }
  return (
    <Component>
      <Label htmlFor={id}>
        {label}
        {getFieldByType()}
        {error && <Error>{error}</Error>}
      </Label>
    </Component>
  )
}
