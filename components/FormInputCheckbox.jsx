import { forwardRef, useState } from 'react'
import { CheckboxGroup, Checkbox, Input } from '@chakra-ui/core'

const FormInputCheckbox = (props, ref) => {
  const [val, setVal] = useState('')

  return (
    <>
      <Input type="hidden" name={props.name} value={val} onChange={() => {}} ref={ref} />

      <CheckboxGroup {...props} onChange={setVal}>
        {props.options.map(({ name, value, config }, index) => (
          <Checkbox key={index} value={value} {...config}>
            {name}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </>
  )
}

export default forwardRef(FormInputCheckbox)
