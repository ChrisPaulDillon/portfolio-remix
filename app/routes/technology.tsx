import { Box, Container, Flex, Heading, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { PageContainer } from '../features/layout/PageContainer'
import { SectionHeading } from '../features/shared/SectionHeading'
import { TECHNOLOGIES, TechnologyItem } from '../features/technology/const'
import { useAssetUrl } from '../hooks/useAssetUrl'

const TechnologyCard = ({ title, imgSrc }: TechnologyItem) => {
  const imageUrl = useAssetUrl(imgSrc)
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('purple.100', 'purple.700')
  const hoverBorderColor = useColorModeValue('purple.300', 'purple.500')
  
  return (
    <Box
      bg={cardBg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="xl"
      overflow="hidden"
      p={4}
      w={{ base: '150px', md: '180px' }}
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        borderColor: hoverBorderColor,
        boxShadow: 'lg'
      }}
    >
      <VStack spacing={4}>
        <Box 
          position="relative"
          w="full"
          h={{ base: '60px', md: '80px' }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={imageUrl}
            alt={title}
            maxH="100%"
            maxW="100%"
            objectFit="contain"
            loading="lazy"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.1)' }}
          />
        </Box>
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          fontWeight="medium"
          textAlign="center"
          color={useColorModeValue('gray.700', 'gray.200')}
        >
          {title}
        </Text>
      </VStack>
    </Box>
  )
}

const TechnologyPage = () => {
  const sectionBg = useColorModeValue('gray.50', 'gray.900')
  
  return (
    <PageContainer>
      <VStack spacing={8} align="stretch">
        <SectionHeading>Technology Experience</SectionHeading>
        
        <Box
          bg={sectionBg}
          borderRadius="2xl"
          p={{ base: 4, md: 8 }}
          shadow="sm"
        >
          <Container maxW="container.xl" px={0}>
            <Flex
              wrap="wrap"
              gap={{ base: 4, md: 6 }}
              justify={{ base: 'center', md: 'flex-start' }}
            >
              {TECHNOLOGIES.map((tech, index) => (
                <TechnologyCard key={index} {...tech} />
              ))}
            </Flex>
          </Container>
        </Box>
      </VStack>
    </PageContainer>
  )
}

export default TechnologyPage