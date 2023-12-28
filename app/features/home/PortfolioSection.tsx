import { Box, BoxProps, Flex, Text } from '@chakra-ui/react'
import { MutableRefObject, forwardRef } from 'react'
import { PortfolioItem } from '../portfolio/PortfolioItem'
import { PORTFOLIO_ITEMS } from '../portfolio/const'
import { SectionHeading } from '../shared/SectionHeading'

export const PortfolioSection = forwardRef<MutableRefObject<null>, BoxProps>(
  (props, ref) => (
    <Box as="section" ref={ref} {...props}>
      <SectionHeading>Portfolio</SectionHeading>
      <Text textAlign={{ base: 'center', lg: 'left' }}>
        Here is just some of the cool projects I&apos;ve worked on
      </Text>
      <Flex flexDir={'row'} flexWrap={'wrap'} justifyContent="center">
        {PORTFOLIO_ITEMS.map(item => (
          <PortfolioItem key={item.title} {...item} />
        ))}
      </Flex>
    </Box>
  )
)
