import {
  Box,
  BoxProps,
  Container,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { useIsScrolling } from '../../hooks/useIsScrolling'
import { ColorModeButton } from '../shared/ColorModeButton'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { SideBarDrawer } from './SideBarDrawer'
import { NAV_LINKS } from './const'

export const TopBar: React.FC<BoxProps> = props => {
  const { isScrolling } = useIsScrolling()
  const { onOpen, onClose, isOpen } = useDisclosure()

  const bgColor = useColorModeValue('white', 'gray.800')
  const scrollBgColor = useColorModeValue('white', 'gray.800')
  const shadowColor = useColorModeValue(
    '0 2px 10px rgba(0,0,0,0.05)',
    '0 2px 10px rgba(0,0,0,0.2)'
  )

  return (
    <>
      <SideBarDrawer isOpen={isOpen} onClose={onClose} />
      <Box
        as="header"
        position="fixed"
        top={0}
        w="full"
        zIndex={999}
        bg={isScrolling ? scrollBgColor : bgColor}
        transition="all 0.3s ease"
        boxShadow={isScrolling ? shadowColor : 'none'}
        backdropFilter={isScrolling ? 'blur(10px)' : 'none'}
        {...props}
      >
        <Container maxW="1250px">
          <Flex
            px={{ base: 4, md: 6 }}
            py={3}
            align="center"
            justify="space-between"
          >
            <Box>
              <Logo height="40px" width="40px" />
            </Box>

            <Flex
              as="nav"
              display={{ base: 'none', lg: 'flex' }}
              align="center"
              gap={1}
            >
              {NAV_LINKS.map((item, idx) => (
                <NavItem key={idx} isScrolling={isScrolling} {...item} />
              ))}
            </Flex>

            <HStack spacing={2}>
              <ColorModeButton 
                size="sm"
                variant="ghost"
                aria-label="Toggle color mode"
              />
              <IconButton
                aria-label="Open menu"
                variant="ghost"
                display={{ base: 'inline-flex', lg: 'none' }}
                onClick={onOpen}
                icon={<FiMenu />}
                size="sm"
              />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </>
  )
}