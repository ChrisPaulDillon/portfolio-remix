import { Flex } from '@chakra-ui/react'
import { PageContainer } from '../features/layout/PageContainer'
import { PortfolioCard } from '../features/portfolio/PortfolioCard'
import { PORTFOLIO_ITEMS } from '../features/portfolio/const'
import { SectionHeading } from '../features/shared/SectionHeading'

const PortfolioPage = () => (
  <PageContainer>
    <SectionHeading>Portfolio</SectionHeading>
    <Flex
      flexDir={'row'}
      flexWrap={'wrap'}
      justifyContent={{ base: 'center', lg: 'left' }}
    >
      {PORTFOLIO_ITEMS.map(item => (
        <PortfolioCard key={item.title} {...item} />
      ))}
    </Flex>
  </PageContainer>
)

export default PortfolioPage
