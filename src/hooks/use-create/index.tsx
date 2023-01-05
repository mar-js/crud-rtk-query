import { useCreateTaskMutation } from 'api/apiSlice'

export const useCreate = () => {
  const [ createTask, initialResponse ] = useCreateTaskMutation()

  return {
    createTask,
    initialResponse
  }
}
