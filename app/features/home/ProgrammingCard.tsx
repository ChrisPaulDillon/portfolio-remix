import { Box, HStack, Icon, StackProps, useColorModeValue } from '@chakra-ui/react'
import { FaCode } from 'react-icons/fa'
import { HomeBodyText } from './HomeBodyText'

interface ProgrammingCardProps extends StackProps {
  label: string
}

export const ProgrammingCard: React.FC<ProgrammingCardProps> = ({
  label,
  ...rest
}) => {
  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      border="1px"
      borderRadius="full"
      borderColor={useColorModeValue('red.200', 'red.500')}
      bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.100')}
      px={4}
      py={2}
      m={1}
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-2px)',
        borderColor: useColorModeValue('red.400', 'red.300'),
        boxShadow: 'md'
      }}
      {...rest}
    >
      <Icon 
        as={FaCode} 
        color={useColorModeValue('red.500', 'red.300')}
        boxSize={4}
      />
      <HomeBodyText
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize={{ base: 'sm', md: 'md' }}
        fontWeight="medium"
        m={0}
      >
        {label}
      </HomeBodyText>
    </HStack>
  )
}