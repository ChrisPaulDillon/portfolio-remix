import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'

interface ProfileAvatarProps extends BoxProps {
  isMenuCollapsed?: boolean
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  isMenuCollapsed,
  ...rest
}) => (
  <Box
    display="inline-block"
    borderStyle="solid"
    borderWidth={2}
    boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
    borderColor={useColorModeValue('gray.700', 'navy.400')}
    {...rest}
  >
    {/* <Image
      src="/images/chris.png"
      alt="Profile image"
      width={175}
      height={175}
    /> */}
  </Box>
)
