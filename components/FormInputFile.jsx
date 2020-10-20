import { Box, Button, Input, Text } from '@chakra-ui/core'
import { forwardRef, useState } from 'react'

const FormInputFile = (props, ref) => {
  const [file, setFile] = useState(null)
  function handleChangeFile(ev) {
    try {
      const [newFile] = ev.target.files
      setFile(newFile.name)
    } catch (err) {
      setFile(null)
    }
  }

  return (
    <Box position="relative">
      <Button size="md">{file ? 'Got the file!' : 'Upload a file'}</Button>
      {file ? <Text as="p">{file}</Text> : null}

      <Input
        position="absolute"
        maxWidth="100%"
        maxHeight="100%"
        top="0"
        opacity="0"
        {...props}
        ref={ref}
        onChange={handleChangeFile}
      />
    </Box>
  )
}

export default forwardRef(FormInputFile)
