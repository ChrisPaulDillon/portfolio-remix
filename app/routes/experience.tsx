import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { MdCheckCircle, MdWork } from 'react-icons/md'
import { PageContainer } from '../features/layout/PageContainer'
import { SectionHeading } from '../features/shared/SectionHeading'
import { WORK_EXPERIENCE_DATA } from '../features/work-experience/const'

function calculateExperience(startDate: Date) {
  const currentDate = new Date()
  const timeDifference = currentDate.getTime() - startDate.getTime()
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25
  const millisecondsInMonth = millisecondsInYear / 12
  
  const years = Math.floor(timeDifference / millisecondsInYear)
  const months = Math.floor((timeDifference % millisecondsInYear) / millisecondsInMonth)
  
  return { years, months }
}

const ExperiencePage = () => {
  const { years } = calculateExperience(new Date('2017-09-24'))
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('brand.100', 'brand.800')
  const iconBg = useColorModeValue('brand.50', 'brand.900')
  const tagBg = useColorModeValue('accent.50', 'accent.900')
  const tagColor = useColorModeValue('accent.800', 'accent.200')
  const subtleText = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.900', 'white')
  
  return (
    <PageContainer>
      <Stack spacing={8}>
        <Box>
          <SectionHeading mb={2} color={headingColor}>
            Professional Experience
          </SectionHeading>
          <Text
            fontSize="lg"
            color={subtleText}
            maxW="2xl"
          >
            {years}+ years of experience building scalable applications and leading development teams
          </Text>
        </Box>

        <Grid gap={8}>
          {WORK_EXPERIENCE_DATA.map((experience, index) => (
            <Card
              key={index}
              bg={cardBg}
              borderWidth="2px"
              borderColor={borderColor}
              borderRadius="2xl"
              overflow="hidden"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'xl',
                borderColor: useColorModeValue('brand.300', 'brand.600')
              }}
            >
              <CardHeader pb={4}>
                <Flex align="center" gap={4}>
                  <Box
                    p={3}
                    borderRadius="xl"
                    bg={iconBg}
                  >
                    <Icon 
                      as={MdWork} 
                      boxSize={6}
                      color={useColorModeValue('brand.500', 'brand.200')}
                    />
                  </Box>
                  <Box flex="1">
                    <Heading
                      size="lg"
                      color={headingColor}
                      letterSpacing="tight"
                    >
                      {experience.role}
                    </Heading>
                    <Flex
                      align={{ base: 'start', md: 'center' }}
                      direction={{ base: 'column', md: 'row' }}
                      gap={{ base: 1, md: 2 }}
                      mt={2}
                    >
                      <Text
                        fontSize="md"
                        color={subtleText}
                        fontWeight="medium"
                      >
                        {experience.companyName}
                      </Text>
                      <Text
                        fontSize="md"
                        color={subtleText}
                      >
                        {experience.date}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </CardHeader>

              <CardBody pt={0}>
                <Stack spacing={6}>
                  <Text 
                    color={useColorModeValue('gray.700', 'gray.300')}
                    fontSize="lg"
                  >
                    {experience.description}
                  </Text>

                  <Box>
                    <Text
                      fontSize="md"
                      fontWeight="semibold"
                      color={headingColor}
                      mb={3}
                    >
                      Key Responsibilities
                    </Text>
                    <List spacing={3}>
                      {experience.responsibilities.map((responsibility, idx) => (
                        <ListItem
                          key={idx}
                          fontSize="md"
                          color={useColorModeValue('gray.700', 'gray.300')}
                          display="flex"
                          alignItems="flex-start"
                        >
                          <ListIcon
                            as={MdCheckCircle}
                            color={useColorModeValue('brand.500', 'brand.200')}
                            mt={1}
                          />
                          {responsibility}
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  <Box>
                    <Text
                      fontSize="md"
                      fontWeight="semibold"
                      color={headingColor}
                      mb={3}
                    >
                      Technologies
                    </Text>
                    <Flex gap={2} flexWrap="wrap">
                      {experience.technologies.map((tech, idx) => (
                        <Tag
                          key={idx}
                          size="md"
                          bg={tagBg}
                          color={tagColor}
                          borderRadius="full"
                          px={4}
                          py={2}
                          fontWeight="medium"
                          _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'sm'
                          }}
                          transition="all 0.2s"
                        >
                          {tech}
                        </Tag>
                      ))}
                    </Flex>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Stack>
    </PageContainer>
  )
}

export default ExperiencePage