import { Box, HStack, Icon, StackProps, Text } from '@chakra-ui/react'
import { FaCode } from 'react-icons/fa'

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
      alignContent="center"
      border="1px"
      borderRadius={20}
      borderColor="red"
      color="secondary"
      mx={1}
      w="125px"
      {...rest}
    >
      <Box mt={1}>
        <Icon as={FaCode} />
      </Box>
      <Text color="faded" fontSize="xs" fontWeight="bold" px={1}>
        {label}
      </Text>
    </HStack>
  )
}
