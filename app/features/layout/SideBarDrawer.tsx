import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerProps
} from '@chakra-ui/react'
import { SideBarContent } from './SideBarContent'

export const SideBarDrawer: React.FC<Omit<DrawerProps, 'children'>> = ({
  ...rest
}) => {
  const { onClose } = { ...rest }
  return (
    <Drawer placement="left" size="xs" {...rest}>
      <DrawerOverlay />
      <DrawerContent>
        <SideBarContent w="full" onClose={onClose} bg="none" />
      </DrawerContent>
    </Drawer>
  )
}
