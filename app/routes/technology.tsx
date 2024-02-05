import { Flex, HStack, Image, Text } from '@chakra-ui/react'
import { PageContainer } from '../features/layout/PageContainer'
import { SectionHeading } from '../features/shared/SectionHeading'
import { TECHNOLOGIES, TechnologyItem } from '../features/technology/const'

const TechnologyPage: React.FC = () => (
  <PageContainer>
    <SectionHeading>Technology Experience</SectionHeading>

    <Flex
      mt={4}
      flexWrap="wrap"
      w="100%"
      justifyContent={{ base: 'center', lg: 'flex-start' }}
    >
      {TECHNOLOGIES?.map((tech: TechnologyItem, index) => (
        <HStack
          key={index}
          w="100%"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
          overflow="hidden"
          rounded={5}
          p={3}
          m={2}
          maxW="200px"
          justifyContent="space-between"
          alignContent="center"
        >
          <Text textAlign="center" fontSize={{ base: 'lg', md: 'xl' }}>
            {tech.title}
          </Text>

          <Image src={tech.imgSrc} width={40} height={40} alt={tech.title} />
        </HStack>
      ))}
    </Flex>
  </PageContainer>
)

export default TechnologyPage
