import { FormEvent } from 'react'

import { useUpdateTaskComplete } from 'hooks'

import { ITask } from 'interfaces'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Checkbox
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

export const Task: React.FC<ITask> = ({
  id,
  title,
  description,
  completed
}) => {
  const { updateTaskComplete } = useUpdateTaskComplete()

  const handleCheckbox = (e: FormEvent) => {
    const { checked } = e.target as HTMLInputElement

    return updateTaskComplete({
      id,
      title,
      description,
      completed: checked
    })
  }

  return (
    <Card>
      <CardHeader>
        <Heading as="h3" size="md">{ title }</Heading>
      </CardHeader>
      <CardBody>
        <Text>{ description }</Text>
      </CardBody>
      <CardFooter>
        <Link
          to={ `/${id}` }
          style={ { width: '100%' } }
        >
          <Button colorScheme="green">View</Button>
        </Link>
        <Checkbox
          data-testid="checkbox"
          onChange={ handleCheckbox }
          isChecked={ completed }
        >Completed</Checkbox>
      </CardFooter>
    </Card>
  )
}
