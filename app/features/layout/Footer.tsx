import {
  Box,
  BoxProps,
  Flex,
  Heading,
  HeadingProps,
  HStack,
  Icon,
  Link,
  Text,
  TextProps,
  VStack
} from '@chakra-ui/react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { NAV_LINKS } from './const'
import { SocialButton } from './SocialButton'

interface FooterTextProps extends TextProps {
  isHighlighted?: boolean
}

const FooterText: React.FC<FooterTextProps> = ({ isHighlighted, ...rest }) => (
  <Text
    fontSize="sm"
    w="100%"
    lineHeight={6}
    textDecor={isHighlighted ? 'underline' : 'inherit'}
    {...rest}
  />
)
const FooterHeading: React.FC<HeadingProps> = props => (
  <Heading size="sm" w="100%" lineHeight={1.5} {...props} />
)

export const Footer: React.FC<BoxProps> = props => {
  return (
    <Box
      as="footer"
      borderTop="1px"
      borderColor="border"
      w="100%"
      px={20}
      py={2}
    >
      <Flex
        minH="200px"
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        align="center"
        textAlign={{ sm: 'center', lg: 'left' }}
        {...props}
      >
        <VStack
          lineHeight={0.8}
          minW="150px"
          justifyItems={{ base: 'center', sm: 'center', lg: 'flex-start' }}
          alignItems={{ base: 'center', lg: 'flex-start' }}
          textAlign={{ base: 'center', sm: 'center', md: 'left', lg: 'left' }}
          w="fill"
        >
          <FooterHeading size="sm">Browse</FooterHeading>
          {NAV_LINKS.map(link => (
            <Box w="100%" key={link.label}>
              <Link href={link.href}>
                <FooterText>{link.label}</FooterText>
              </Link>
            </Box>
          ))}
        </VStack>
        <VStack
          pt={{ base: 10, sm: 10, md: 0, lg: 0 }}
          textAlign={{ base: 'center', sm: 'center', md: 'left', lg: 'left' }}
        >
          <FooterHeading>Contact</FooterHeading>
          <HStack alignContent="flex-start" w="100%">
            <Icon as={GoLocation} />
            <FooterText>Scotland, United Kingdom</FooterText>
          </HStack>
          <HStack w="100%">
            <Icon as={AiOutlineMail} />
            <FooterText>chrispauldillon@live.com</FooterText>
          </HStack>
        </VStack>
        <VStack py={{ base: 10, sm: 10, md: 0, lg: 0 }}>
          <FooterHeading size="sm">Relevant Links</FooterHeading>
          <HStack>
            <SocialButton
              label={'Github'}
              href={'https://github.com/ChrisPaulDillon'}
            >
              <FaGithub />
            </SocialButton>
            <SocialButton
              label={'LinkedIn'}
              href={'https://www.linkedin.com/in/christopher-d-106005183/'}
            >
              <FaLinkedin />
            </SocialButton>
          </HStack>
        </VStack>
      </Flex>{' '}
      <Text fontSize="xs" textAlign="center" pt={{ xs: 7, sm: 7, lg: 0 }}>
        © {new Date().getFullYear()} Chris Dillon. All rights reserved
      </Text>
    </Box>
  )
}
