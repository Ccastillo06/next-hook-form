/* eslint-disable react/display-name */
import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input
} from '@chakra-ui/core'

import FormInputNumber from './FormInputNumber'
import FormInputFile from './FormInputFile'
import FormInputCheckbox from './FormInputCheckbox'
import FormInputRadio from './FormInputRadio'

const inputTypeComponent = {
  text: Input,
  date: Input,
  color: Input,
  file: FormInputFile,
  number: FormInputNumber,
  checkbox: FormInputCheckbox,
  radio: FormInputRadio
}

const FormGenerator = ({ formFields = [], onSubmit }) => {
  const { handleSubmit, register, formState } = useForm()

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      {formFields.map(
        ({ type, label, helperText, errors, name, config = {}, ...restFieldProps }, index) => {
          const Component = inputTypeComponent[type]

          if (type === 'submit') {
            return (
              <Button key={index} type={type} isLoading={formState.isSubmitting}>
                {label}
              </Button>
            )
          }

          return Component ? (
            <FormControl
              key={index}
              isRequired={!!config.required}
              isInvalid={formState.errors[name]}
              marginBottom="1rem"
            >
              {label ? (
                <FormLabel fontWeight="bold" htmlFor={name}>
                  {label}
                </FormLabel>
              ) : null}

              <Component
                id={name}
                type={type}
                name={name}
                {...restFieldProps}
                {...config}
                ref={register(config)}
              />

              {helperText ? (
                <FormHelperText id={`${name}-helper-text`}>{helperText}</FormHelperText>
              ) : null}
              {errors && formState.errors[name] ? (
                <FormErrorMessage id={`${name}-error-text`}>
                  {errors[formState.errors[name].type]}
                </FormErrorMessage>
              ) : null}
            </FormControl>
          ) : null
        }
      )}
    </Box>
  )
}

export default FormGenerator
