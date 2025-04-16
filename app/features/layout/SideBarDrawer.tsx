import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { NAV_LINKS } from './const'

export const SideBarDrawer: React.FC<Omit<DrawerProps, 'children'>> = ({
  ...rest
}) => {
  const { onClose } = { ...rest }
  const bgColor = useColorModeValue('white', 'gray.800')
  
  return (
    <Drawer placement="left" size="xs" {...rest}>
      <DrawerOverlay />
      <DrawerContent bg={bgColor}>
        <DrawerCloseButton size="lg" />
        <DrawerHeader borderBottomWidth="1px" px={4} py={4}>
          <Logo height="40px" width="40px" />
        </DrawerHeader>
        <DrawerBody px={2} py={4}>
          <VStack spacing={2} align="stretch">
            {NAV_LINKS.map((item, idx) => (
              <NavItem
                key={idx}
                w="full"
                justifyContent="flex-start"
                {...item}
                onClose={onClose}
              />
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}