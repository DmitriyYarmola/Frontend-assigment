import React, { useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { ArrowIcon } from '@client/icons'
import { useOutsideClick } from '@client/hooks'
import { DefaultInput, InputProps } from '../inputs'
import { OptionItem } from './interfaces'

const ListItem = styled.li`
  background: ${({ theme: { colors } }) => colors['white-003']};
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background: ${({ theme: { colors } }) => colors['white-005']};
  }
`

const List = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  z-index: 10;
  background: ${({
    theme: {
      colors: { bg },
    },
  }) => bg};
`

const Arrow = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  transition: transform 0.2s ease-in-out;

  &.open {
    transform: translateY(-50%) rotate(180deg);
  }
`

const Field = styled.div`
  position: relative;
`

const Component = styled.div`
  position: relative;
`

interface Props extends Omit<InputProps, 'onChange'> {
  options: OptionItem[]
  onSelect: (value: string) => void
}

export const Select = ({ options, onSelect, ...inputProps }: Props) => {
  const [selectedValue, setSelectedValue] = useState('')
  const listRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const onToggleOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  const onChange = (key: string) => {
    setSelectedValue(key)
    onSelect(key)
  }

  useOutsideClick(listRef, onToggleOpen, isOpen)

  const filteredOptions = useMemo(
    () => options.filter(({ key }) => key !== selectedValue),
    [options, selectedValue]
  )

  const selectedOption = useMemo(
    () => options.find(({ key }) => key === selectedValue),
    [options, selectedValue]
  )

  return (
    <Component ref={listRef}>
      <Field onClick={onToggleOpen}>
        <DefaultInput {...inputProps} value={selectedOption?.label || ''} disabled />
        <Arrow
          src={ArrowIcon}
          placeholder="Select stage from list"
          className={isOpen ? 'open' : ''}
        />
      </Field>
      {isOpen && (
        <List>
          {filteredOptions.map(({ key, label }) => (
            <ListItem key={key} onClick={() => onChange(key)}>
              {label}
            </ListItem>
          ))}
        </List>
      )}
    </Component>
  )
}

export type { Props as SelectProps }
