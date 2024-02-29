import { Box, BoxProps, Flex } from '@chakra-ui/react'
import { MutableRefObject, forwardRef } from 'react'
import { PortfolioItem } from '../portfolio/PortfolioItem'
import { PORTFOLIO_ITEMS } from '../portfolio/const'
import { SectionHeading } from '../shared/SectionHeading'
import { HomeBodyText } from './HomeBodyText'

export const PortfolioSection = forwardRef<MutableRefObject<null>, BoxProps>(
  (props, ref) => (
    <Box as="section" ref={ref} {...props}>
      <SectionHeading>Portfolio</SectionHeading>
      <HomeBodyText>
        Here is just some of the cool projects I&apos;ve worked on
      </HomeBodyText>
      <Flex flexDir={'row'} flexWrap={'wrap'} justifyContent="center">
        {PORTFOLIO_ITEMS.map(item => (
          <PortfolioItem key={item.title} {...item} />
        ))}
      </Flex>
    </Box>
  )
)
