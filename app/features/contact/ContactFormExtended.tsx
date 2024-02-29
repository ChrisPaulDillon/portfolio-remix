import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { HomeBodyText } from '../home/HomeBodyText'
import { SectionHeading } from '../shared/SectionHeading'
import { ContactFormContainer } from './ContactFormContainer'

export const ContactFormExtended = () => {
  const bgColour = useColorModeValue('whiteAlpha.500', 'gray.800')

  return (
    <Box
      bg={bgColour}
      color="white"
      borderRadius="2xl"
      p={{ sm: 5, md: 5, lg: 16 }}
      w="100%"
    >
      <Flex flexDir={{ base: 'column', lg: 'row' }}>
        <Box minW="300px" mt={{ base: 5, lg: 1 }}>
          <SectionHeading>Contact</SectionHeading>
          <HomeBodyText
            mt={{ sm: 3, md: 3, lg: 5 }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            Please fill out the contact form
          </HomeBodyText>
          <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
            <VStack pl={0} spacing={3} alignItems="flex-start">
              <Button
                size="md"
                height="48px"
                w={{ base: 'full', lg: '225px' }}
                variant="ghost"
                color="gray.500"
                _hover={{ border: '2px solid purple' }}
                leftIcon={<MdEmail color="red" size="20px" />}
              >
                <HomeBodyText>chrispauldillon@live.com</HomeBodyText>
              </Button>

              <Button
                size="md"
                height="48px"
                w={{ base: 'full', lg: '225px' }}
                variant="ghost"
                color="gray.500"
                _hover={{ border: '2px solid purple' }}
                leftIcon={<MdLocationOn color="red" size="20px" />}
              >
                <HomeBodyText>Scotland, United Kingdom</HomeBodyText>
              </Button>
            </VStack>
          </Box>
          <HStack
            mt={{ lg: 10, md: 10 }}
            spacing={5}
            px={5}
            pb={2}
            justifyContent={{ base: 'center', lg: 'flex-start' }}
            alignItems="flex-start"
          >
            <Link to="https://www.linkedin.com/in/christopher-d-106005183/">
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                isRound={true}
                icon={<FaLinkedin size="28px" />}
              />
            </Link>
            <Link to="https://github.com/ChrisPaulDillon">
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                isRound={true}
                icon={<BsGithub size="28px" />}
              />
            </Link>
          </HStack>
        </Box>
        <ContactFormContainer />
      </Flex>
    </Box>
  )
}
