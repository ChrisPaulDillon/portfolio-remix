import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HeadingProps,
  HStack,
  Icon,
  Link,
  Text,
  TextProps,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { useLocation } from '@remix-run/react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { NAV_LINKS } from './const'
import { SocialButton } from './SocialButton'

const FooterText: React.FC<{ href?: string } & TextProps> = ({
  href,
  ...rest
}) => {
  const { pathname } = useLocation()
  const isHighlighted = pathname === href
  const textColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Text
      fontSize="sm"
      color={textColor}
      w="100%"
      lineHeight={1.6}
      textDecor={isHighlighted ? 'underline' : 'inherit'}
      _hover={{ color: useColorModeValue('gray.900', 'white') }}
      transition="color 0.2s"
      textAlign={{ base: 'center', md: 'left' }}
      {...rest}
    />
  )
}

const FooterHeading: React.FC<HeadingProps> = props => (
  <Heading
    size="md"
    mb={4}
    color={useColorModeValue('gray.800', 'white')}
    textAlign={{ base: 'center', md: 'left' }}
    {...props}
  />
)

export const Footer: React.FC = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const bgColor = useColorModeValue('white', 'gray.900')
  const iconColor = useColorModeValue('gray.700', 'gray.200')
  
  return (
    <Box
      as="footer"
      borderTop="1px"
      borderColor={borderColor}
      bg={bgColor}
      py={8}
    >
      <Container maxW="1250px">
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={{ base: 8, md: 12 }}
        >
          <GridItem>
            <FooterHeading>Browse</FooterHeading>
            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
              {NAV_LINKS.map(link => (
                <Link key={link.label} href={link.href}>
                  <FooterText href={link.href}>{link.label}</FooterText>
                </Link>
              ))}
            </VStack>
          </GridItem>

          <GridItem>
            <FooterHeading>Contact</FooterHeading>
            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={3}>
              <HStack spacing={3}>
                <Icon as={GoLocation} color={iconColor} />
                <FooterText>Scotland, United Kingdom</FooterText>
              </HStack>
              <HStack spacing={3}>
                <Icon as={AiOutlineMail} color={iconColor} />
                <FooterText>chrispauldillon@live.com</FooterText>
              </HStack>
            </VStack>
          </GridItem>

          <GridItem>
            <FooterHeading>Connect</FooterHeading>
            <HStack spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
              <SocialButton
                label="LinkedIn"
                href="https://www.linkedin.com/in/christopher-d-106005183/"
              >
                <FaLinkedin />
              </SocialButton>
              <SocialButton
                label="GitHub"
                href="https://github.com/ChrisPaulDillon"
              >
                <FaGithub />
              </SocialButton>
            </HStack>
          </GridItem>
        </Grid>

        <Text
          fontSize="xs"
          textAlign="center"
          color={useColorModeValue('gray.700', 'gray.200')}
          mt={8}
        >
          © {new Date().getFullYear()} Chris Dillon. All rights reserved
        </Text>
      </Container>
    </Box>
  )
}