import { PropsWithChildren } from 'react'

import { Container } from '@chakra-ui/react'

export const Header: React.FC<PropsWithChildren> = ({ children }) => (
  <Container
    as="header"
    w="100%"
    p={ 2 }
    textAlign="center"
    borderBottom="2px solid"
    borderColor="purple.200"
  >
    { children }
  </Container>
)
