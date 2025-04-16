import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { HiAcademicCap } from 'react-icons/hi'
import { SectionHeading } from '../shared/SectionHeading'

const academicHistory = [
  {
    degree: 'MSc Big Data Technologies',
    institution: 'Glasgow Caledonian University',
    date: '2016 - 2017'
  },
  {
    degree: 'BSc Computer Science',
    institution: 'Glasgow Caledonian University',
    date: '2014 - 2016'
  },
  {
    degree: 'HND Software Development',
    institution: 'City of Glasgow College',
    date: '2012 - 2014'
  }
]

export const AcademicSection = () => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('red.100', 'red.700')
  const iconBg = useColorModeValue('red.50', 'red.900')
  const iconColor = useColorModeValue('red.500', 'red.200')
  const institutionColor = useColorModeValue('gray.600', 'gray.400')
  
  return (
    <Box w="100%">
      <SectionHeading>Academic Achievements</SectionHeading>
      <Stack spacing={4} mt={6}>
        {academicHistory.map((education, index) => (
          <Card
            key={index}
            bg={cardBg}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="xl"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
              borderColor: useColorModeValue('red.300', 'red.500')
            }}
          >
            <CardHeader pb={2}>
              <Flex align="center" gap={4}>
                <Box
                  p={2}
                  borderRadius="lg"
                  bg={iconBg}
                >
                  <Icon 
                    as={HiAcademicCap} 
                    boxSize={5}
                    color={iconColor}
                  />
                </Box>
                <Box>
                  <Heading
                    size="md"
                    bgGradient={useColorModeValue(
                      'linear(to-r, red.600, purple.500)',
                      'linear(to-r, red.200, purple.200)'
                    )}
                    bgClip="text"
                  >
                    {education.degree}
                  </Heading>
                  <Text
                    fontSize="sm"
                    color={institutionColor}
                    mt={1}
                  >
                    {education.date}
                  </Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody pt={0}>
              <Text
                fontSize="md"
                color={useColorModeValue('gray.700', 'gray.300')}
              >
                {education.institution}
              </Text>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}