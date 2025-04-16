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
import { MdWork } from 'react-icons/md'
import { WORK_EXPERIENCE_DATA } from '../work-experience/const'
import { SectionHeading } from '../shared/SectionHeading'

export const WorkExperienceSection = () => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('purple.100', 'purple.700')
  const iconBg = useColorModeValue('purple.50', 'purple.900')
  const iconColor = useColorModeValue('purple.500', 'purple.200')
  const dateColor = useColorModeValue('gray.600', 'gray.400')
  
  return (
    <Box w="100%">
      <SectionHeading>Work Experience</SectionHeading>
      <Stack spacing={4} mt={6}>
        {WORK_EXPERIENCE_DATA.map((experience, index) => (
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
              borderColor: useColorModeValue('purple.300', 'purple.500')
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
                    as={MdWork} 
                    boxSize={5}
                    color={iconColor}
                  />
                </Box>
                <Box>
                  <Heading
                    size="md"
                    bgGradient={useColorModeValue(
                      'linear(to-r, purple.600, red.500)',
                      'linear(to-r, purple.200, red.200)'
                    )}
                    bgClip="text"
                  >
                    {experience.companyName}
                  </Heading>
                  <Text
                    fontSize="sm"
                    color={dateColor}
                    mt={1}
                  >
                    {experience.date}
                  </Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody pt={0}>
              <Text
                fontSize="md"
                fontWeight="medium"
                color={useColorModeValue('gray.700', 'gray.300')}
              >
                {experience.role}
              </Text>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}