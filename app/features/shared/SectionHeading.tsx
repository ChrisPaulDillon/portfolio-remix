import { Heading, HeadingProps } from '@chakra-ui/react'

export const SectionHeading: React.FC<HeadingProps> = props => (
  <Heading
    textDecor="red underline"
    pb={3}
    as="h2"
    textUnderlineOffset={10}
    textAlign={{ base: 'center', sm: 'center', lg: 'left' }}
    fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
    lineHeight={{ base: 1.4, md: 1.2 }}
    {...props}
  />
)