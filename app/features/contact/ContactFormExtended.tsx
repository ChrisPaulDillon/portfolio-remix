import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
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
  const bgColor = useColorModeValue('whiteAlpha.500', 'gray.800')
  const buttonBgColor = useColorModeValue('gray.100', 'whiteAlpha.200')
  const buttonHoverBgColor = useColorModeValue('brand.50', 'brand.900')
  const iconColor = useColorModeValue('brand.500', 'brand.300')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const contactBg = useColorModeValue('white', 'whiteAlpha.100')
  const contactHoverBg = useColorModeValue('gray.50', 'whiteAlpha.200')
  
  return (
    <Box
      bg={bgColor}
      borderRadius="2xl"
      p={{ sm: 5, md: 5, lg: 16 }}
      w="100%"
      boxShadow="xl"
    >
      <Flex flexDir={{ base: 'column', lg: 'row' }} gap={8}>
        <Box flex="1">
          <SectionHeading>Get in Touch</SectionHeading>
          <HomeBodyText
            mt={4}
            textAlign={{ base: 'center', lg: 'left' }}
            fontSize="lg"
            color={useColorModeValue('gray.600', 'gray.300')}
          >
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </HomeBodyText>

          <VStack spacing={4} mt={8} align={{ base: 'center', lg: 'flex-start' }}>
            <Flex
              align="center"
              gap={3}
              p={3}
              borderRadius="lg"
              bg={contactBg}
              w={{ base: 'full', lg: 'auto' }}
              minW="250px"
              transition="all 0.2s"
              _hover={{
                bg: contactHoverBg,
                transform: 'translateY(-2px)'
              }}
            >
              <Icon as={MdEmail} color={iconColor} boxSize={5} />
              <Text fontSize="md" color={textColor} fontWeight="medium">
                chrispauldillon@live.com
              </Text>
            </Flex>

            <Flex
              align="center"
              gap={3}
              p={3}
              borderRadius="lg"
              bg={contactBg}
              w={{ base: 'full', lg: 'auto' }}
              minW="250px"
              transition="all 0.2s"
              _hover={{
                bg: contactHoverBg,
                transform: 'translateY(-2px)'
              }}
            >
              <Icon as={MdLocationOn} color={iconColor} boxSize={5} />
              <Text fontSize="md" color={textColor} fontWeight="medium">
                Scotland, United Kingdom
              </Text>
            </Flex>
          </VStack>

          <HStack 
            mt={8} 
            spacing={4} 
            justify={{ base: 'center', lg: 'flex-start' }}
          >
            <Link to="https://www.linkedin.com/in/christopher-d-106005183/">
              <IconButton
                aria-label="linkedin"
                icon={<FaLinkedin size="24px" />}
                size="lg"
                borderRadius="full"
                bg={buttonBgColor}
                color={iconColor}
                _hover={{ 
                  bg: buttonHoverBgColor,
                  transform: 'translateY(-2px)'
                }}
                transition="all 0.3s"
              />
            </Link>
            <Link to="https://github.com/ChrisPaulDillon">
              <IconButton
                aria-label="github"
                icon={<BsGithub size="24px" />}
                size="lg"
                borderRadius="full"
                bg={buttonBgColor}
                color={iconColor}
                _hover={{ 
                  bg: buttonHoverBgColor,
                  transform: 'translateY(-2px)'
                }}
                transition="all 0.3s"
              />
            </Link>
          </HStack>
        </Box>

        <Box flex="1">
          <ContactFormContainer />
        </Box>
      </Flex>
    </Box>
  )
}