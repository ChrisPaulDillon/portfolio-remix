import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

export const ColorModeButton: React.FC<Omit<IconButtonProps, 'aria-label'>> = ({
  ...rest
}) => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <IconButton
          aria-label="Toggle color mode"
          variant="ghost"
          color={useColorModeValue('gray.600', 'gray.300')}
          icon={useColorModeValue(
            <MoonIcon boxSize={4} />, 
            <SunIcon boxSize={4} />
          )}
          onClick={toggleColorMode}
          size="sm"
          p={1}
          minW={8}
          h={8}
          _hover={{
            bg: useColorModeValue('gray.100', 'gray.700'),
            transform: 'translateY(-1px)'
          }}
          {...rest}
        />
      </motion.div>
    </AnimatePresence>
  )
}