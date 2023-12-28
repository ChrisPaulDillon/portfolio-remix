import { Container, Grid, GridItem } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { Footer } from './Footer'
import { TopBar } from './TopBar'

export const AppBody: React.FC<PropsWithChildren> = ({ children }) => (
  <Grid templateRows="minmax(80vh, auto) auto" overflowY="hidden" h="100%">
    <TopBar />
    <GridItem overflow="hidden">
      <Container pt={1} as="main" h="100%" maxW="1250px">
        {children}
      </Container>
    </GridItem>
    <GridItem>
      <Footer />
    </GridItem>
  </Grid>
)
