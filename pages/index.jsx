import Head from 'next/head'
import { Box, Heading, useToast } from '@chakra-ui/core'

import FormGenerator from '../components/FormGenerator'

import formFields from '../formFields'

export default function Home() {
  const toast = useToast()

  return (
    <>
      <Head>
        <title>React Next Hook Form</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&amp;display=swap"
          rel="stylesheet"
        />
      </Head>

      <Box minHeight="100vh" maxWidth="100vw" overflowX="hidden" padding="1rem">
        <Heading as="h1" size="xl" marginBottom="1rem">
          React Next Hook Form
        </Heading>

        <Box>
          <FormGenerator
            formFields={formFields}
            onSubmit={async (values) => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve()
                  console.log(values)
                  toast({
                    title: 'Form Submitted! 🎉',
                    description: `Did it work smoothly?`,
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                    position: 'bottom-right'
                  })
                }, 2000)
              })
            }}
          />
        </Box>
      </Box>
    </>
  )
}
