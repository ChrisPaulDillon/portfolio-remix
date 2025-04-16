import { mode } from '@chakra-ui/theme-tools'

export const components = {
  Button: {
    defaultProps: {
      colorScheme: 'brand'
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('brand.600', 'brand.300')(props),
      textUnderlineOffset: 3
    })
  },
  Text: {
    baseStyle: props => ({
      color: mode('gray.800', 'gray.200')(props),
      textUnderlineOffset: 3,
      fontWeight: 'normal'
    })
  },
  Heading: {
    baseStyle: props => ({
      color: mode('gray.800', 'gray.100')(props),
      textUnderlineOffset: 3
    })
  }
}