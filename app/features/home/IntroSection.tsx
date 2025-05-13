import {
  Box,
  Button,
  Flex,
  Heading,
  StackProps,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import React from 'react'
import { ProgrammingCard } from '../../features/home/ProgrammingCard'
import { HomeBodyText } from './HomeBodyText'

export const IntroSection: React.FC<StackProps> = props => (
  <VStack
    as="section"
    spacing={{ base: 4, md: 6 }}
    alignItems={{ base: 'center', lg: 'flex-start' }}
    w="full"
    {...props}
  >
    <Heading
      as="h1"
      fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
      bgGradient={useColorModeValue(
        'linear(to-r, purple.600, red.500)',
        'linear(to-r, purple.200, red.200)'
      )}
      bgClip="text"
      letterSpacing="tight"
      lineHeight={{ base: 1.3, md: 1.2 }}
    >
      Chris Dillon
    </Heading>

    <Heading
      as="h2"
      fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
      fontWeight="bold"
      color={useColorModeValue('gray.700', 'gray.300')}
      lineHeight={{ base: 1.4, md: 1.2 }}
    >
      Full Stack Software Engineer
    </Heading>

    <HomeBodyText
      fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
      textAlign={{ base: 'center', lg: 'left' }}
      maxW={{ base: 'full', md: '600px' }}
      color={useColorModeValue('gray.600', 'gray.400')}
    >
      I&apos;m a Senior Software Engineer specialising in building exceptional
      digital experiences and bringing products to scale.
    </HomeBodyText>

    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={4}
      w="full"
      justify={{ base: 'center', lg: 'flex-start' }}
      align="center"
      mt={{ base: 4, md: 6 }}
    >
      <Box
        display="flex"
        gap={2}
        flexWrap="wrap"
        justifyContent={{ base: 'center', lg: 'flex-start' }}
      >
        <ProgrammingCard label="C#" />
        <ProgrammingCard label="TypeScript" />
        <ProgrammingCard label="React" />
      </Box>
    </Flex>

    <Box
      w="full"
      pt={{ base: 4, md: 6 }}
      textAlign={{ base: 'center', lg: 'left' }}
    >
      <Link to="/portfolio">
        <Button
          colorScheme="purple"
          size={{ base: 'md', md: 'lg' }}
          px={{ base: 6, md: 8 }}
          fontSize={{ base: 'sm', md: 'md' }}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg'
          }}
          transition="all 0.3s"
        >
          View My Portfolio
        </Button>
      </Link>
    </Box>
  </VStack>
)
