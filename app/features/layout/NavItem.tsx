import {
  Flex,
  FlexProps,
  Icon,
  ScaleFade,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { NavItemType } from './const'

type NavItemProps = NavItemType & FlexProps

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  href,
  label,
  onClose,
  isScrolling,
  ...rest
}) => {
  const textColor = useColorModeValue(
    isScrolling ? 'white' : 'gray.600',
    'white'
  )
  const active = false
  const bgColourHovered = useColorModeValue('whiteAlpha.600', 'blackAlpha.400')

  return (
    // <Link href={href} passHref scroll={false}>
    <ScaleFade initialScale={1} whileHover={{ scale: 1.1 }} in={true}>
      <Flex
        align="center"
        px={3}
        mx={1}
        rounded="md"
        py={1.5}
        cursor="pointer"
        _hover={{
          bg: bgColourHovered,
          color: 'whiteAlpha.400',
          fontWeight: 'bold'
        }}
        role="group"
        fontWeight={active ? 'bold' : 'semibold'}
        transition=".15s ease"
        onClick={onClose}
        {...rest}
      >
        <Icon mr="2" boxSize="5" color="primary" as={icon} />
        <Text
          color={textColor}
          textDecor={active ? 'underline' : 'none'}
          textDecorationThickness="2px"
          textUnderlineOffset={4.5}
          fontWeight={{ base: 'semibold', lg: 'normal' }}
        >
          {label}
        </Text>
      </Flex>
    </ScaleFade>
    // </Link>
  )
}
