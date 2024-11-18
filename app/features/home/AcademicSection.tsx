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
import { HiAcademicCap } from 'react-icons/hi'
import { SectionHeading } from '../shared/SectionHeading'
import { HomeBodyText } from './HomeBodyText'

const steps = [
  {
    title: 'MSc Big Data Technologies',
    description: 'Glasgow Caledonian University',
    date: '2018 - 2019'
  },
  {
    title: 'BSc Computer Science',
    description: 'Glasgow Caledonian University',
    date: '2016 - 2018'
  },
  {
    title: 'HND Software Development',
    description: 'City of Glasgow College',
    date: '2013 - 2015'
  }
]

export const AcademicSection = () => {
  return (
    <Box w="100%">
      <SectionHeading>Academic Achievements</SectionHeading>
      <Stepper
        index={5}
        justifyContent="center"
        alignContent="center"
        colorScheme="purple"
        orientation="vertical"
        mt={5}
        px={{ base: 18, sm: 0, lg: 0 }}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<HiAcademicCap />}
                incomplete={<HiAcademicCap />}
                active={<HiAcademicCap />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle as={HomeBodyText} textAlign="left">
                {step.title}
              </StepTitle>
              <StepDescription as={HomeBodyText} textAlign="left">
                {step.description}
              </StepDescription>
              <StepDescription as={HomeBodyText} textAlign="left">
                {step.date}
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
