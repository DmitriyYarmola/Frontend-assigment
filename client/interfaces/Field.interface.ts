import { ChangeEvent } from 'react'

export type InputOnChange = (event: ChangeEvent<HTMLInputElement>) => void
export type SelectOnChange = (value: string) => void
