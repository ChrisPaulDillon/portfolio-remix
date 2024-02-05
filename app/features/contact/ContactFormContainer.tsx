import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { useAppToast } from '../../hooks/useAppToast'

export const ContactFormContainer = () => {
  const { register, handleSubmit } = useForm()
  const { toastSuccess } = useAppToast()

  const handleFormSubmit = (values: any) => {
    toastSuccess('Success', 'Opening your email client', 'top-right')
    window.location.href = `mailto:chrispauldillon@live.com?subject=${values.subject}&body=${values.body} Best regards, ${values.name}`
  }

  return (
    <Box bg="white" borderRadius="lg" m={{ base: 5 }}>
      <Box m={8} color="#0B0E3F">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>Your Name</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none">
                  <BsPerson color="gray.800" />
                </InputLeftElement>
                <Input
                  type="text"
                  size="md"
                  {...register('name', { required: true })}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Subject</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none">
                  <MdOutlineEmail color="gray.800" />
                </InputLeftElement>
                <Input
                  type="text"
                  size="md"
                  {...register('subject', { required: true })}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                borderColor="gray.300"
                placeholder="message"
                {...register('body', { required: true })}
              />
            </FormControl>
            <Button
              variant="solid"
              colorScheme="purple"
              color="white"
              w="full"
              type="submit"
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  )
}
