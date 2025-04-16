import {
  Button,
  ButtonProps,
  Icon,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Link, useLocation } from '@remix-run/react'
import { NavItemType } from './const'

type NavItemProps = NavItemType & ButtonProps

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  href,
  label,
  onClose,
  isScrolling,
  ...rest
}) => {
  const { pathname } = useLocation()
  const active = pathname === href
  
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const activeTextColor = useColorModeValue('purple.600', 'purple.300')
  const hoverBg = useColorModeValue('gray.100', 'gray.700')
  const activeBg = useColorModeValue('purple.50', 'purple.900')

  return (
    <Link to={href}>
      <Button
        variant="ghost"
        size="sm"
        px={3}
        py={2}
        display="flex"
        alignItems="center"
        gap={2}
        color={active ? activeTextColor : textColor}
        bg={active ? activeBg : 'transparent'}
        _hover={{
          bg: hoverBg,
          transform: 'translateY(-1px)'
        }}
        onClick={onClose}
        transition="all 0.2s"
        {...rest}
      >
        <Icon as={icon} boxSize={4} />
        <Text
          fontSize="sm"
          fontWeight={active ? 'semibold' : 'medium'}
        >
          {label}
        </Text>
      </Button>
    </Link>
  )
}