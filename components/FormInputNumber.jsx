import { forwardRef } from 'react'
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/core'

const FormInputNumber = (props, ref) => (
  <NumberInput {...props}>
    <NumberInputField {...props} ref={ref} />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
)

export default forwardRef(FormInputNumber)
