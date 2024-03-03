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
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="colour mode"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={() => toggleColorMode()}
          variant="ghost"
          fontSize="25px"
          size="lg"
          {...rest}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}
