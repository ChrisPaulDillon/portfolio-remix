import { Text, TextProps } from '@chakra-ui/react'

export const HomeBodyText: React.FC<TextProps> = props => {
  return (
    <Text
      textAlign={{ base: 'center', lg: 'left' }}
      fontSize={{ base: 'md', sm: 'lg' }}
      lineHeight={{ base: 1.6, md: 1.8 }}
      {...props}
    />
  )
}