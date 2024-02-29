import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper
} from '@chakra-ui/react'
import { MdWork } from 'react-icons/md'
import { SectionHeading } from '../shared/SectionHeading'
import { WORK_EXPERIENCE_DATA } from '../work-experience/const'
import { HomeBodyText } from './HomeBodyText'

export const WorkExperienceSection = () => {
  return (
    <Box w="100%">
      <SectionHeading>Work Experience</SectionHeading>
      <Stepper
        index={0}
        mb={10}
        justifyContent="center"
        alignContent="center"
        colorScheme="purple"
        orientation="vertical"
        mt={5}
        px={{ base: 18, sm: 0, lg: 0 }}
      >
        {WORK_EXPERIENCE_DATA.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<MdWork />}
                incomplete={<MdWork />}
                active={<MdWork />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle as={HomeBodyText}>{step.companyName}</StepTitle>
              <StepDescription as={HomeBodyText}>{step.role}</StepDescription>
              <StepDescription as={HomeBodyText}>{step.date}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
