import {
  Box,
  BoxProps,
  Flex,
  Heading,
  HStack,
  Icon,
  ScaleFade,
  Text
} from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import { BsFolderFill } from 'react-icons/bs'
import { PortfolioLinkItem, ProjectCategories } from './const'
import { PortfolioGitHubTag } from './PortfolioGitHubTag'
import { PortfolioTag } from './PortfolioTag'

export interface PortfolioItemProps extends BoxProps {
  title: string
  description: string
  extendedDescription: string
  linkItems: PortfolioLinkItem[]
  categories: ProjectCategories[]
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id,
  title,
  description,
  linkItems,
  categories,
  ...rest
}) => (
  <Box w="100%" py={3} {...rest}>
    <ScaleFade initialScale={1} whileHover={{ scale: 1.02 }} in={true}>
      <Flex
        flexDir="column"
        p={1}
        justifyContent="space-between"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        minH="200px"
        boxShadow="dark-lg"
      >
        <HStack mt={2}>
          <Icon as={BsFolderFill} h="20px" w="40px" color="red" />
          {linkItems.map((item, idx) => (
            <PortfolioGitHubTag key={idx} {...item} />
          ))}
        </HStack>
        <Link to={`portfolio/${id}`}>
          <Box p={2}>
            <Heading
              fontWeight="semibold"
              as="h5"
              fontSize="clamp(15px, 1.5vw, 20px)"
              lineHeight="10"
              textAlign="left"
            >
              {title}
            </Heading>
            <Text textAlign="left">{description}</Text>
          </Box>
        </Link>
        <Box mb={1}>
          {categories?.map((item, idx) => (
            <PortfolioTag key={idx}>{item}</PortfolioTag>
          ))}
        </Box>
      </Flex>
    </ScaleFade>
  </Box>
)
