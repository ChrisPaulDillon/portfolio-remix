import { extendTheme } from '@chakra-ui/react'
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'
import { components } from './components'
import { semanticTokens } from './semanticTokens'

const styles = {
  global: (props: Record<string, any> | StyleFunctionProps) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const fonts = {
  heading: `'Rubik', sans-serif`
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  semanticTokens,
  fonts
})
export default theme
