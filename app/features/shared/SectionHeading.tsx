import { Heading, HeadingProps } from '@chakra-ui/react'

export const SectionHeading: React.FC<HeadingProps> = props => (
  <Heading
    textDecor="red underline"
    pb={3}
    as="h2"
    textUnderlineOffset={10}
    textAlign={{ base: 'center', sm: 'center', lg: 'left' }}
    fontSize={{ base: '2xl', sm: '2xl', lg: '4xl' }}
    {...props}
  />
)
