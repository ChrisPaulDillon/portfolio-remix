import { Box, BoxProps, Flex, Stack, Text } from '@chakra-ui/react'
import { ProfileAvatar } from '../shared/ProfileAvatar'
import { SectionHeading } from '../shared/SectionHeading'

interface AboutMeSectionProps extends BoxProps {}

export const AboutMeSection: React.FC<AboutMeSectionProps> = props => (
  <Box as="section">
    <SectionHeading>About Me</SectionHeading>
    <Stack direction={{ base: 'column', lg: 'row' }} w="100%" {...props}>
      <Text textAlign={{ base: 'center', lg: 'left' }} fontSize={{base: 'lg'}}>
        Hello! My name is Chris and I have a passionate for designing and
        developing technology. I started programming at the young age of 14,
        creating scripts for the popular online MMORPG game called RuneScape.
        <br />
        <br />
        More recently, I achieved a Masters in Big Data Technologies and
        progressed onto a <strong>PhD programme</strong> in Blockchain
        Technology. Fast forward to today, I am a seasoned Software Engineer
        with a huge range of skills including full stack development, creation
        of agents, data analysis and mobile development.
        <br /> <br />
        In my spare time, I love keeping fit and going to the gym. I am also an
        avid reader and study many topics such as programming, neuroscience and
        psychology.
      </Text>
      <Flex justifyContent="center" pb={{ base: 4, sm: 4, lg: 0 }} w="100%">
        <ProfileAvatar />
      </Flex>
    </Stack>
  </Box>
)
