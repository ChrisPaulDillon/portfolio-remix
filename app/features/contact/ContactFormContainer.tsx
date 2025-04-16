import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineEmail, MdSubject } from 'react-icons/md'
import { useAppToast } from '../../hooks/useAppToast'

export const ContactFormContainer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { toastSuccess } = useAppToast()

  const handleFormSubmit = (values: any) => {
    toastSuccess('Success', 'Opening your email client', 'top-right')
    window.location.href = `mailto:chrispauldillon@live.com?subject=${values.subject}&body=${values.body} Best regards, ${values.name}`
  }

  const inputBg = useColorModeValue('gray.100', 'whiteAlpha.100')
  const borderColor = useColorModeValue('purple.300', 'purple.500')
  const hoverBorderColor = useColorModeValue('purple.500', 'purple.300')

  return (
    <Box 
      bg={useColorModeValue('white', 'gray.800')} 
      borderRadius="xl"
      boxShadow="xl"
      p={8}
      m={{ base: 5 }}
      borderWidth="1px"
      borderColor={borderColor}
      _hover={{ borderColor: hoverBorderColor }}
      transition="all 0.3s"
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <VStack spacing={5}>
          <FormControl isRequired>
            <FormLabel fontSize="lg" fontWeight="medium">Your Name</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BsPerson color="gray.800" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="John Doe"
                bg={inputBg}
                borderRadius="lg"
                size="lg"
                _hover={{ borderColor: hoverBorderColor }}
                _focus={{ borderColor: hoverBorderColor, boxShadow: 'outline' }}
                {...register('name', { required: true })}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="lg" fontWeight="medium">Subject</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdSubject color="gray.800" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="What's this about?"
                bg={inputBg}
                borderRadius="lg"
                size="lg"
                _hover={{ borderColor: hoverBorderColor }}
                _focus={{ borderColor: hoverBorderColor, boxShadow: 'outline' }}
                {...register('subject', { required: true })}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="lg" fontWeight="medium">Message</FormLabel>
            <Textarea
              placeholder="Your message..."
              bg={inputBg}
              borderRadius="lg"
              size="lg"
              minH="200px"
              _hover={{ borderColor: hoverBorderColor }}
              _focus={{ borderColor: hoverBorderColor, boxShadow: 'outline' }}
              {...register('body', { required: true })}
            />
          </FormControl>

          <Button
            type="submit"
            size="lg"
            width="full"
            colorScheme="purple"
            borderRadius="lg"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            transition="all 0.3s"
          >
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  )
}