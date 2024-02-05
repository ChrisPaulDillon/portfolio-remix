import { Badge, Box } from '@chakra-ui/react'
import { PageContainer } from '../features/layout/PageContainer'
import { SectionHeading } from '../features/shared/SectionHeading'
import { WorkExperienceTabs } from '../features/work-experience/WorkExperienceTabs'

function calculateTimeDifference(startDate: Date) {
  const currentDate = new Date()

  // Calculate the difference in milliseconds
  //@ts-ignore
  const timeDifference = currentDate - startDate

  // Convert milliseconds to years and months
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25
  const millisecondsInMonth = millisecondsInYear / 12

  const years = Math.floor(timeDifference / millisecondsInYear)
  const months = Math.floor(
    (timeDifference % millisecondsInYear) / millisecondsInMonth
  )

  return { years, months }
}

const ExperiencePage = () => {
  const { years, months } = calculateTimeDifference(new Date('2019-09-24'))
  return (
    <PageContainer>
      <SectionHeading>Experience</SectionHeading>
      <Badge
        colorScheme="green"
        variant="solid"
      >{`${years} years and ${months} months in field experience`}</Badge>
      <Box mt={4} borderRight="1px" borderColor="red">
        <WorkExperienceTabs />
      </Box>
    </PageContainer>
  )
}

export default ExperiencePage
