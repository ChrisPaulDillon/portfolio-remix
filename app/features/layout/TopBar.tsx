import {
  Box,
  BoxProps,
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

  const scrollBgColour = useColorModeValue('gray.700', 'gray.700')
  return (
    <>
      <SideBarDrawer isOpen={isOpen} onClose={onClose} />
      <HStack
        as="header"
        position="fixed"
        top={0}
        px={2}
        py={1}
        boxShadow="lg"
        w="full"
        borderColor="border"
        alignContent="space-between"
        justifyContent="space-between"
        alignSelf="flex-start"
        bg={isScrolling ? scrollBgColour : 'inherit'}
        zIndex={999}
        {...props}
      >
        <Box mx={2} mr={4}>
          <Logo width={45} height={45} />
        </Box>

        <Flex
          as="nav"
          display={{
            base: 'none',
            sm: 'none',
            lg: 'inline-flex'
          }}
        >
          {NAV_LINKS.map((item, idx) => (
            <NavItem key={idx} isScrolling={isScrolling} mt={2} {...item} />
          ))}
        </Flex>

        <Box ml={3}>
          {/* <Link
            href={
              'https://drive.google.com/file/d/1WURFe6aAvrczIqjtJMtA1I0v2I93zI60/view'
            }
            isExternal
          >
            <Button size="sm" mx={2} variant="outline" colorScheme="purple">
              Get My CV
            </Button>
          </Link> */}
          <ColorModeButton px={2} />{' '}
          <IconButton
            aria-label="Menu"
            variant="outline"
            display={{
              base: 'inline-flex',
              md: 'inline-flex',
              lg: 'none'
            }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="sm"
          />
        </Box>
      </HStack>
    </>
  )
}
