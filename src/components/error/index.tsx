import { IError } from 'interfaces'

import { Heading } from '@chakra-ui/react'

export const Error: React.FC<IError> = ({ error }) => <Heading color="red.400">Error: { JSON.stringify(error) }</Heading>
