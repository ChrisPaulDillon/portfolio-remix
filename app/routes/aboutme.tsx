import { Text } from '@chakra-ui/react'

import { PageContainer } from '../features/layout/PageContainer'
import { SectionHeading } from '../features/shared/SectionHeading'

const AboutMePage = () => (
  <PageContainer>
    <SectionHeading>About Me</SectionHeading>
    <Text mt={2}>
      Hello! My name is Chris and I have a passionate for designing and
      developing technology. I started programming at the young age of 14,
      creating scripts for the popular online MMORPG game called RuneScape. More
      recently, I achieved a Masters in Big Data Technologies and progressed
      onto a PhD programme in Blockchain Technology. During my PhD, I had the
      privilege of teaching modules at Masters level at Newcastle University.
      <br />
      <br />
      Fast forward to today, I am a seasoned Software Engineer with a huge range
      of skills including full stack development, creation of agents, data
      analysis and mobile development.The core technology stack I have worked on
      includes C#, NextJs, TypeScript, Chakra UI & React. I have extensive
      experience with Data Analysis with the programming language Python,
      including utilising the popular Data Science libraries such as NumPY,
      SkLearn & more.
      <br />
      <br />
      In my spare time, I love keeping fit and going to the gym. I am also an
      avid reader and study many topics such as programming, neuroscience and
      psychology. My favourite books rergarding programming are Refactoring:
      Improving the Design of Existing Code, Head First Design Patterns and the
      You Don&apos;t Know Javascript Series.
    </Text>
  </PageContainer>
)

export default AboutMePage
