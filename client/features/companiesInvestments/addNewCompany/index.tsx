import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/client'
import { ADD_COMPANY, CompanyType } from '@client/graphql'
import { Button } from '@client/ui'
import { Modal } from './modal'

interface Props {}

const Wrapper = styled.div`
  display: flex;
  justify-content: ${({
    theme: {
      contentPositions: { center },
    },
  }) => center};
`

export const AddNewCompany: React.FC<Props> = () => {
  const [createCompany, { data }] = useMutation(ADD_COMPANY)
  const [isModalOpen, setIsOpenModalOpen] = useState(false)

  const onToggleModal = () => {
    setIsOpenModalOpen((prevState) => !prevState)
  }

  const onSubmit = async (data: Omit<CompanyType, 'id'>) => {
    await createCompany({ variables: { ...data } })
  }

  useEffect(() => {
    if (data) onToggleModal()
  }, [data])

  return (
    <Wrapper>
      <Button onClick={onToggleModal} withBackground>
        Add new company
      </Button>
      {isModalOpen && <Modal onClose={onToggleModal} onSubmit={onSubmit} />}
    </Wrapper>
  )
}
