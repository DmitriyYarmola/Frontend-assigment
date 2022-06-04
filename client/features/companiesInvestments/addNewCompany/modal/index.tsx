import React from 'react'
import { CompanyType } from '@client/graphql'
import { ModalTemplate } from '@client/ui'
import { Form } from './form'

interface Props {
  onClose: VoidFunction
  onSubmit: (data: Omit<CompanyType, 'id'>) => void
}
export const Modal = ({ onClose, onSubmit }: Props) => (
  <ModalTemplate
    subtitle="Add new company by filling all the required fields, select from lists and be carefull,
    because integer is limited and not everyone can handle that"
    title="Add new company"
    onClose={onClose}
  >
    <Form onCancel={onClose} onSubmit={onSubmit} />
  </ModalTemplate>
)
