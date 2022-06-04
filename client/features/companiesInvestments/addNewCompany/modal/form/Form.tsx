import React from 'react'
import { useFormik } from 'formik'
import styled from 'styled-components'
import { CompanyType } from '@client/graphql'
import { Button, Field, FieldTypesEnum } from '@client/ui'
import { validationSchema } from './schemes'
import { SECTORS, STAGES } from './lib'

const Actions = styled.div`
  display: flex;
  justify-content: ${({
    theme: {
      contentPositions: { end },
    },
  }) => end};
  grid-column-gap: 5px;
  margin-top: 80px;
`

const Component = styled.form`
  display: grid;
  grid-row-gap: 20px;
`

interface Props {
  onCancel: VoidFunction
  onSubmit: (data: Omit<CompanyType, 'id'>) => void
}
export const Form = ({ onCancel, onSubmit }: Props) => {
  const { values, errors, handleSubmit, handleChange, setFieldValue, touched } =
    useFormik({
      initialValues: {
        name: '',
        stage: '',
        sector: '',
        investmentSize: 0,
      },
      validationSchema,
      onSubmit,
    })

  const { name, stage, sector, investmentSize } = values

  const onChangeSelects = (type: 'stage' | 'sector') => (value: string) => {
    if (type === 'stage') {
      const stage = STAGES.find((stage) => stage.key === value)
      if (stage) setFieldValue('stage', stage.label)
      return
    }

    const sector = SECTORS.find((sector) => sector.key === value)
    if (sector) setFieldValue('sector', sector.label)
  }

  return (
    <Component onSubmit={handleSubmit}>
      <Field
        id="name"
        name="name"
        placeholder="Company name"
        fieldType={FieldTypesEnum.Input}
        onChange={handleChange}
        value={name}
        label="Company name"
        error={touched.name && errors.name ? errors.name : ''}
      />
      <Field
        id="stage"
        name="stage"
        placeholder="Stage"
        fieldType={FieldTypesEnum.Select}
        onSelect={onChangeSelects('stage')}
        value={stage}
        label="Stage"
        options={STAGES}
        error={touched.stage && errors.stage ? errors.stage : ''}
      />
      <Field
        id="sector"
        name="sector"
        placeholder="Sector"
        fieldType={FieldTypesEnum.Select}
        onSelect={onChangeSelects('sector')}
        value={sector}
        label="Sector"
        options={SECTORS}
        error={touched.sector && errors.sector ? errors.sector : ''}
      />
      <Field
        id="investmentSize"
        name="investmentSize"
        placeholder="Enter amount"
        fieldType={FieldTypesEnum.WithLabel}
        onChange={handleChange}
        value={String(investmentSize)}
        label="Investment size"
        miniLabel="EUR"
        type="number"
        error={
          touched.investmentSize && errors.investmentSize ? errors.investmentSize : ''
        }
      />
      <Actions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button withBackground type="submit">
          Add company
        </Button>
      </Actions>
    </Component>
  )
}
