import { Flex, VStack } from '@chakra-ui/react'
import { useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import { AboutMeSection } from '../features/home/AboutMeSection'
import { AcademicSection } from '../features/home/AcademicSection'
import { ContactMeSection } from '../features/home/ContactMeSection'
import { IntroSection } from '../features/home/IntroSection'
import { PortfolioSection } from '../features/home/PortfolioSection'
import { WorkExperienceSection } from '../features/home/WorkExperienceSection'

const Index = () => {
  const contactMeRef = useRef(null)

  const { enterCount: contactMeEnterCount } = useInViewport(contactMeRef, {
    threshold: 0.5
  })

  return (
    <VStack
      justifyContent="space-between"
      spacing="14"
      pt="100px"
      mx={{ base: 10 }}
    >
      <IntroSection />
      <AboutMeSection />
      <Flex flexDir={{ base: 'column', lg: 'row' }} w="100%">
        <WorkExperienceSection />
        <AcademicSection />
      </Flex>
      <PortfolioSection />
      <ContactMeSection mb={5} />
    </VStack>
  )
}

export default Index
