import {
  ButtonProps,
  chakra,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react'

interface SocialButtonProps extends ButtonProps {
  children?: any
  label?: any
  href?: any
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  children,
  label,
  href
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}