import { forwardRef } from 'react'
import { RadioGroup, Radio } from '@chakra-ui/core'

const FormInputRadio = (props, ref) => (
  <RadioGroup name={props.name} {...props}>
    {props.options.map(({ name, value, config }, index) => (
      <Radio key={index} value={value} name={props.name} {...config} ref={ref}>
        {name}
      </Radio>
    ))}
  </RadioGroup>
)

export default forwardRef(FormInputRadio)
