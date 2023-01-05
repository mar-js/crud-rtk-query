import { Container } from '@chakra-ui/react'

import { PropsWithChildren } from 'react'

export const Main: React.FC<PropsWithChildren> = ({ children }) => (
  <Container
    as="main"
    w="100%"
    maxW="1000px"
    minW="320px"
    pt={ 10 }
    px={ 2 }
    pb={ 2 }
  >
    { children }
  </Container>
)
