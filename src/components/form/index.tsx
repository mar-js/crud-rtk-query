import { FormEvent, useState } from 'react'

import {
  useBack,
  useCreate,
  useUpdateTask
} from 'hooks'

import { useParams } from 'react-router-dom'

import { IForm, ITask } from 'interfaces'

import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'

import { BtnBack } from 'components'

export const Form: React.FC<IForm> = ({ isEdit }) => {
  const { navigate } = useBack()
  const { id } = useParams()
  const { createTask } = useCreate()
  const { updateTask } = useUpdateTask()
  const [ newTask, setNewTask ] = useState<ITask | any>({})

  const handleSubmit = (e: FormEvent) => {
    const RESET = (e.target as HTMLFormElement)

    e.preventDefault()

    if (isEdit) {
      updateTask({
        ...newTask,
        id: Number(id)
      })

      navigate('/')

      return RESET.reset()
    }

    createTask(newTask)

    return RESET.reset()
  }

  const handleChange = (e: FormEvent) => {
    const { value, name } = e.target as HTMLInputElement

    setNewTask({
      ...newTask,
      [name]: value,
      completed: false
    })
  }

  return (
    <Box
      onSubmit={ handleSubmit }
      as="form"
      action={ isEdit ? 'PUT' : 'POST' }
      maxW="600px"
      m="auto"
      p={ 4 }
      border="2px dashed"
      borderColor="purple.100"
    >
      <FormControl>
        <FormLabel>Task</FormLabel>
        <Input
          onChange={ handleChange }
          placeholder="Task task..."
          type="text"
          name="title"
          required
        />
      </FormControl>
      <Divider my={ 4 } borderWidth={ 2 } borderStyle="dashed" />
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          onChange={ handleChange }
          placeholder="Lorem lorem..."
          name="description"
          required
        />
      </FormControl>
      <ButtonGroup mt={ 2 }>
        <Button
          role="button"
          type="submit"
          size="md"
          colorScheme={ isEdit ? 'orange' : 'blue' }
        >{ isEdit ? 'Edit' : 'Button' }</Button>
        { isEdit && <BtnBack /> }
      </ButtonGroup>
    </Box>
  )
}
