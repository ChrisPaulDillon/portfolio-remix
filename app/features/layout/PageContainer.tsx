import { Box, BoxProps } from '@chakra-ui/react'

export const PageContainer: React.FC<BoxProps> = props => (
  <Box w="100%" my={'100px'} {...props} />
)
