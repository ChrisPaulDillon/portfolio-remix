import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import { BsFolderFill, BsGithub } from 'react-icons/bs'
import { useAssetUrl } from '../../hooks/useAssetUrl'
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
  const imageUrl = useAssetUrl('/images/programming.png')
  const gradientLight = 'linear-gradient(to right, #ffffff, #f8f9fa)'
  const gradientDark = 'linear-gradient(to right, #1a202c, #2d3748)'
  const cardBg = useColorModeValue(gradientLight, gradientDark)
  const borderColor = useColorModeValue('purple.100', 'purple.900')
  const shadowColor = useColorModeValue(
    '0 4px 6px rgba(160, 174, 192, 0.2)',
    '0 4px 6px rgba(9, 17, 28, 0.4)'
  )
  
  return (
    <Card
      w={{ base: 'full', lg: '47%' }}
      mx={2}
      my={4}
      bg={cardBg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="2xl"
      overflow="hidden"
      transition="all 0.4s ease-in-out"
      boxShadow={shadowColor}
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: useColorModeValue(
          '0 12px 24px rgba(160, 174, 192, 0.3)',
          '0 12px 24px rgba(9, 17, 28, 0.5)'
        )
      }}
      {...rest}
    >
      <CardHeader pb={2}>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap={3}>
            <Box
              p={{ base: 1.5, md: 2 }}
              borderRadius="lg"
              bg={useColorModeValue('red.50', 'red.900')}
            >
              <Icon 
                as={BsFolderFill} 
                boxSize={{ base: 3, md: 5 }}
                color={useColorModeValue('red.500', 'red.200')} 
              />
            </Box>
            <Heading
              size={{ base: 'sm', md: 'md' }}
              textAlign={{ base: 'center', lg: 'left' }}
              bgGradient={useColorModeValue(
                'linear(to-r, purple.600, red.500)',
                'linear(to-r, purple.200, red.200)'
              )}
              bgClip="text"
            >
              {title}
            </Heading>
          </Flex>
          <Link to={linkItem.linkUrl}>
            <Icon 
              as={BsGithub} 
              boxSize={{ base: 5, md: 6 }}
              color={useColorModeValue('gray.600', 'gray.300')}
              _hover={{ 
                color: useColorModeValue('purple.500', 'purple.300'),
                transform: 'scale(1.1)'
              }}
              transition="all 0.3s"
            />
          </Link>
        </Flex>
      </CardHeader>

      <CardBody py={4}>
        <Stack spacing={4}>
          <HomeBodyText 
            fontSize={{ base: 'sm', md: 'md' }}
            color={useColorModeValue('gray.600', 'gray.300')}
            lineHeight="1.6"
          >
            {description}
          </HomeBodyText>
          <Box 
            position="relative" 
            overflow="hidden" 
            borderRadius="xl"
            boxShadow="inner"
          >
            <Link to={linkItem.linkUrl}>
              <Image
                src={imageUrl}
                alt={title}
                w="full"
                h="200px"
                objectFit="cover"
                transition="transform 0.5s ease"
                _hover={{ transform: 'scale(1.08)' }}
                loading="lazy"
              />
            </Link>
          </Box>
        </Stack>
      </CardBody>

      <CardFooter 
        pt={0} 
        flexWrap="wrap" 
        gap={2}
        sx={{
          '& > button': {
            minW: '136px'
          }
        }}
      >
        {categories?.map(category => (
          <Tag
            key={category}
            bgGradient={useColorModeValue(
              'linear(to-r, purple.100, pink.100)',
              'linear(to-r, purple.900, pink.900)'
            )}
            color={useColorModeValue('purple.800', 'purple.100')}
            size="sm"
            borderRadius="full"
            px={3}
            py={1}
            _hover={{
              transform: 'translateY(-1px)',
              bgGradient: useColorModeValue(
                'linear(to-r, purple.200, pink.200)',
                'linear(to-r, purple.800, pink.800)'
              )
            }}
            transition="all 0.3s"
          >
            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              fontWeight="medium"
            >
              {category}
            </Text>
          </Tag>
        ))}
      </CardFooter>
    </Card>
  )
}