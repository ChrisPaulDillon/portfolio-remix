import { Text, TextProps } from '@chakra-ui/react'

export const HomeBodyText: React.FC<TextProps> = props => {
  return (
    <Text
      textAlign={{ base: 'center', lg: 'left' }}
      fontSize={{ base: '2xl', lg: 'lg' }}
      {...props}
    />
  )
}
