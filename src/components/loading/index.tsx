import { Flex, Spinner } from '@chakra-ui/react'

export const Loading: React.FC = () => (
  <Flex justifyContent="center" alignItems="center">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="purple.500"
      size="xl"
    />
  </Flex>
)
