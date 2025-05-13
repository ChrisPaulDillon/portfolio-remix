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
      role="form"
      aria-label="Contact form"
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <VStack spacing={5}>
          <FormControl isRequired>
            <FormLabel fontSize="lg" fontWeight="medium" htmlFor="name">Your Name</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BsPerson aria-hidden="true" />
              </InputLeftElement>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                bg={inputBg}
                borderRadius="lg"
                size="lg"
                _hover={{ borderColor: hoverBorderColor }}
                _focus={{ borderColor: hoverBorderColor, boxShadow: 'outline' }}
                {...register('name', { required: 'Name is required' })}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
            </InputGroup>
            {errors.name && (
              <span id="name-error" role="alert" style={{color: 'red'}}>
                {errors.name.message as string}
              </span>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="lg" fontWeight="medium" htmlFor="subject">Subject</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdSubject aria-hidden="true" />
              </InputLeftElement>
              <Input
                id="subject"
                type="text"
                placeholder="What's this about?"
                bg={inputBg}
                borderRadius="lg"
                size="lg"
                _hover={{ borderColor: hoverBorderColor }}
                _focus={{ borderColor: hoverBorderColor, boxShadow: 'outline' }}
                {...register('subject', { required: 'Subject is required' })}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
            </InputGroup>
            {errors.subject && (
              <span id="subject-error" role="alert" style={{color: 'red'}}>
                {errors.subject.message as string}
              </span>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="lg" fontWeight="medium" htmlFor="body">Message</FormLabel>
            <Textarea
              id="body"
              placeholder="Your message..."
              bg={inputBg}
              borderRadius="lg"
              size="lg"
              minH="200px"
              _hover={{ borderColor: hoverBorderColor }}
              _focus={{ borderColor: hoverBorderColor, boxShadow: 'outline' }}
              {...register('body', { required: 'Message is required' })}
              aria-describedby={errors.body ? 'body-error' : undefined}
            />
            {errors.body && (
              <span id="body-error" role="alert" style={{color: 'red'}}>
                {errors.body.message as string}
              </span>
            )}
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
            aria-label="Send message"
          >
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  )
}