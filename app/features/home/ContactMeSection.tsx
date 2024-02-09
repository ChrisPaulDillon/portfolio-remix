import { Box, BoxProps } from '@chakra-ui/react'
import { MutableRefObject, forwardRef } from 'react'
import { ContactFormExtended } from '../contact/ContactFormExtended'

export const ContactMeSection = forwardRef<MutableRefObject<null>, BoxProps>(
  (props, ref) => (
    <Box as="section" w="100%" ref={ref} {...props}>
      <ContactFormExtended />
    </Box>
  )
)
