import { Box, Container, Flex, VStack } from '@chakra-ui/react'
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
    <Container maxW="full" px={0}>
      <VStack
        spacing={{ base: 10, md: 14 }}
        pt={{ base: "80px", md: "100px" }}
        px={{ base: 4, sm: 6, md: 8, lg: 10 }}
      >
        <IntroSection />
        
        <Box w="full" px={{ base: 2, md: 4 }}>
          <AboutMeSection />
        </Box>

        <Box w="full">
          <Flex 
            direction={{ base: 'column', lg: 'row' }} 
            gap={{ base: 8, lg: 12 }}
            px={{ base: 2, md: 4 }}
          >
            <Box flex="1">
              <WorkExperienceSection />
            </Box>
            <Box flex="1">
              <AcademicSection />
            </Box>
          </Flex>
        </Box>

        <Box w="full" px={{ base: 2, md: 4 }}>
          <PortfolioSection />
        </Box>

        <Box w="full" px={{ base: 2, md: 4 }} pb={{ base: 8, md: 10 }}>
          <ContactMeSection ref={contactMeRef} />
        </Box>
      </VStack>
    </Container>
  )
}

export default Index