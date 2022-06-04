import * as yup from 'yup'

export const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Company name has to be longer then 2 characters')
    .required('The field is required'),
  stage: yup.string().required('The field is required'),
  sector: yup.string().required('The field is required'),
  investmentSize: yup
    .number()
    .positive('The value should be greater  than 0')
    .required('The field is required'),
})
