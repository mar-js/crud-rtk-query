import { PropsWithChildren } from 'react'

import { Container } from '@chakra-ui/react'

export const Section: React.FC<PropsWithChildren> = ({ children }) => (
  <Container
    as="section"
    maxW="800px"
    minW="320px"
    p={ 2 }
  >
    { children }
  </Container>
)
