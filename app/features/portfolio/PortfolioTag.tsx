import { Tag, TagProps } from '@chakra-ui/react'

export const PortfolioTag: React.FC<TagProps> = props => (
  <Tag
    rounded="full"
    fontSize="0.8em"
    colorScheme="gray"
    mx={1}
    my={1}
    {...props}
  />
)
