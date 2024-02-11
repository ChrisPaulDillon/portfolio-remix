import { Box, BoxProps, Image, useColorModeValue } from '@chakra-ui/react'

export const ProfileAvatar: React.FC<BoxProps> = props => (
  <Box
    display="inline-block"
    borderStyle="solid"
    borderWidth={2}
    boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
    borderColor={useColorModeValue('gray.700', 'navy.400')}
    {...props}
  >
    <Image
      src="/images/chris.png"
      alt="Profile image"
      objectFit='cover'
      width={250}
      height={350}
    />
  </Box>
)
