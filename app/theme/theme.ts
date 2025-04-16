import { extendTheme } from '@chakra-ui/react'
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'
import { components } from './components'
import { semanticTokens } from './semanticTokens'

const styles = {
  global: (props: Record<string, any> | StyleFunctionProps) => ({
    body: {
      bg: mode('gray.50', '#1a1b1e')(props)
    }
  })
}

const fonts = {
  heading: `'Rubik', sans-serif`,
  body: `'Rubik', sans-serif`
}

const colors = {
  brand: {
    50: '#f0e4ff',
    100: '#cbb2ff',
    200: '#a480ff',
    300: '#7c4dff',
    400: '#551bff',
    500: '#3b01e6',
    600: '#2e00b4',
    700: '#210082',
    800: '#140051',
    900: '#070021'
  },
  accent: {
    50: '#ffe4eb',
    100: '#ffb3c5',
    200: '#fc819f',
    300: '#f94f79',
    400: '#f61d53',
    500: '#dd0939',
    600: '#ad032c',
    700: '#7c001f',
    800: '#4c0012',
    900: '#1f0007'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components: {
    ...components,
    Button: {
      defaultProps: {
        colorScheme: 'brand'
      }
    }
  },
  colors,
  semanticTokens: {
    ...semanticTokens,
    colors: {
      primary: {
        default: 'brand.500',
        _dark: 'brand.300'
      },
      secondary: {
        default: 'accent.500',
        _dark: 'accent.300'
      },
      faded: {
        default: 'gray.700',
        _dark: 'gray.400'
      },
      text: {
        default: 'gray.800',
        _dark: 'gray.200'
      },
      border: {
        default: 'gray.200',
        _dark: 'gray.700'
      }
    }
  },
  fonts
})

export default theme