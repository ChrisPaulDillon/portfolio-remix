import { mode } from '@chakra-ui/theme-tools'

export const components = {
  Button: {
    defaultProps: {
      variant: 'solid',
      colorScheme: 'red'
    }
  },
  Link: {
    baseStyle: props => ({
      // color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  },
  Text: {
    baseStyle: props => ({
      color: mode('gray.800', 'white')(props),
      textUnderlineOffset: 3,
      fontWeight: 'normal'
    })
  },
  Heading: {
    baseStyle: props => ({
      color: mode('gray.600', 'white')(props),
      textUnderlineOffset: 3
    })
  }
}
