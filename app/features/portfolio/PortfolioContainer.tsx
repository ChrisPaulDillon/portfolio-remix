import { Flex } from '@chakra-ui/react'
import { PORTFOLIO_ITEMS } from '.'
import { SectionHeading } from '../layout/SectionHeading'
import { PortfolioItem } from './PortfolioItem'

export const PortfolioContainer = () => (
  <>
    <SectionHeading>Portfolio</SectionHeading>
    <Flex flexDir={'row'} flexWrap={'wrap'}>
      {PORTFOLIO_ITEMS.map(item => (
        <PortfolioItem key={item.title} {...item} />
      ))}
    </Flex>
  </>
)
