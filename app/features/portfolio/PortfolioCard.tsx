import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  Flex,
  Heading,
  Icon,
  Image,
  Tag,
  Text
} from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import { BsFolderFill, BsThreeDotsVertical } from 'react-icons/bs'
import { HomeBodyText } from '../home/HomeBodyText'
import { PortfolioLinkItem, ProjectCategories } from './const'

export interface PortfolioCardProps extends Omit<CardProps, 'id'> {
  title: string
  description: string
  extendedDescription: string
  linkItems: PortfolioLinkItem[]
  categories: ProjectCategories[]
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  linkItems,
  categories,
  ...rest
}) => {
  const linkItem = linkItems[0]
  return (
    <Card maxW={{ base: 'xl', sm: 'xl', lg: 'lg' }} mx={1} my={2} {...rest}>
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Icon as={BsFolderFill} h="20px" w="40px" color="red" />

            <Heading
              size={{ base: 'xl', lg: 'lg' }}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              {title}
            </Heading>
            {/* <Text>{description}</Text> */}
          </Flex>
          <Icon color="gray" as={BsThreeDotsVertical} />
        </Flex>
      </CardHeader>
      <CardBody>
        <HomeBodyText>{description}</HomeBodyText>
      </CardBody>
      <Link to={linkItem.linkUrl}>
        <Image
          objectFit="cover"
          src="/images/programming.png"
          alt="Chakra UI"
        />
      </Link>

      <CardFooter
        flexWrap="wrap"
        sx={{
          '& > button': {
            minW: '136px'
          }
        }}
      >
        {categories?.map(category => (
          <Tag colorScheme="purple" m={1} minW="65px">
            <Text
              textAlign="center"
              borderRadius="xl"
              w="100%"
              fontSize="sm"
              fontWeight="bold"
            >
              {category}
            </Text>
          </Tag>
        ))}
      </CardFooter>
    </Card>
  )
}
