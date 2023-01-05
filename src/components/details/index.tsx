import { ITask } from 'interfaces'

import { useBack, useDelete } from 'hooks'

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text
} from '@chakra-ui/react'

import { BtnBack } from 'components'

import { Link } from 'react-router-dom'

export const Details: React.FC<ITask> = ({
  id,
  title,
  description
}) => {
  const { deleteTask } = useDelete()
  const { navigate } = useBack()

  const handleClick = (id: number) => {
    const IS_REMOVED = confirm('Are you sure?')

    if (IS_REMOVED) {
      deleteTask(id)

      return navigate('/')
    }

    return null
  }

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{ title }</Heading>
      </CardHeader>
      <CardBody>
        <Text>{ description }</Text>
      </CardBody>
      <CardFooter>
        <ButtonGroup>
          <BtnBack />
          <Link to={ `/${id}/edit` }>
            <Button colorScheme="orange">Edit</Button>
          </Link>
          <Button onClick={ () => handleClick((id as number)) } colorScheme="red">Delete</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
