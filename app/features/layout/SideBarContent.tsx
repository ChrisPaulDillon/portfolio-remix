import { Box, BoxProps, Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { NAV_LINKS } from './const'

interface SideBarContentProps extends BoxProps {
  onClose?: () => void
  children?: any
}

export const SideBarContent: React.FC<SideBarContentProps> = ({
  onClose,
  children,
  ...rest
}) => (
  <Box mt={2} {...rest}>
    <Box ml={5} mb={5}>
      <Logo />
    </Box>
    <Flex direction="column" as="nav">
      {NAV_LINKS.map((item, idx) => (
        <NavItem key={idx} {...item} onClose={onClose} />
      ))}
    </Flex>
    {children}
  </Box>
)
