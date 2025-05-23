import { Box, BoxProps, Flex, Stack } from '@chakra-ui/react'
import { ProfileAvatar } from '../shared/ProfileAvatar'
import { SectionHeading } from '../shared/SectionHeading'
import { HomeBodyText } from './HomeBodyText'

interface AboutMeSectionProps extends BoxProps {}

export const AboutMeSection: React.FC<AboutMeSectionProps> = props => (
  <Box as="section">
    <SectionHeading>About Me</SectionHeading>
    <Stack direction={{ base: 'column', lg: 'row' }} w="100%" {...props}>
      <HomeBodyText>
        Hello! My name is Chris and I have a passionate for designing and
        developing technology. I started programming at the young age of 14,
        creating scripts for the popular online MMORPG game called RuneScape.
        I am a Senior Software Engineer with my predominant languages being C#, Go, React & TypeScript.
        <br /> <br />
        In my spare time, I enjoy keeping fit and going to the gym. I am also an
        avid reader and study many topics such as programming, neuroscience and
        psychology.
      </HomeBodyText>
      <Flex justifyContent="center" pb={{ base: 4, sm: 4, lg: 0 }} w="100%">
        <ProfileAvatar />
      </Flex>
    </Stack>
  </Box>
)
