import { Link } from 'react-router-dom'

import { Heading } from '@chakra-ui/react'

export const Title: React.FC = () => (
  <Link to="/" style={ { width: '100%' } }>
    <Heading as="h1" color = "purple.500" >RTK Query</Heading>
  </Link>
)
