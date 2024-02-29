import {
  Box,
  Button,
  Flex,
  Heading,
  StackProps,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import { ProgrammingCard } from '../../features/home/ProgrammingCard'
import { HomeBodyText } from './HomeBodyText'

export const IntroSection: React.FC<StackProps> = props => (
  <VStack
    as="section"
    textAlign={{ base: 'center', sm: 'center', lg: 'left' }}
    alignContent="flex-start"
    w="100%"
    {...props}
  >
    <Heading as="h1" size="4xl" w="inherit">
      Chris Dillon
    </Heading>

    <Heading as="h2" fontWeight="bold" w="inherit">
      Full Stack Software Engineer
    </Heading>

    <HomeBodyText w='full'>
      I&apos;m a software engineer specializing in building (and occasionally
      designing) exceptional digital experiences.
    </HomeBodyText>
    <Flex
      pt={2}
      w="full"
      justifyContent={{ sm: 'center', lg: 'flex-start' }}
      alignContent="center"
    >
      <ProgrammingCard label="C#" />
      <ProgrammingCard label="TypeScript" />
      <ProgrammingCard label="React" />
    </Flex>

    <Box w="full" pt={4}>
      {/* <NextLink href="/portfolio" scroll={false}> */}
      <Button colorScheme="purple">My Portfolio</Button>
      {/* </NextLink> */}
    </Box>
  </VStack>
)
