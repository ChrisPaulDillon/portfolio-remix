import { Flex } from '@chakra-ui/react'
import { PageContainer } from '../features/layout/PageContainer'
import { PortfolioItem } from '../features/portfolio/PortfolioItem'
import { PORTFOLIO_ITEMS } from '../features/portfolio/const'
import { SectionHeading } from '../features/shared/SectionHeading'

const PortfolioPage = () => (
  <PageContainer>
    <SectionHeading>Portfolio</SectionHeading>
    <Flex flexDir={'row'} flexWrap={'wrap'} justifyContent="center">
      {PORTFOLIO_ITEMS.map(item => (
        <PortfolioItem key={item.title} {...item} />
      ))}
    </Flex>
  </PageContainer>
)

export default PortfolioPage
