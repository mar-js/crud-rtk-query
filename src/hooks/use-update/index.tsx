import { useUpdateTaskMutation, useUpdateTaskCompleteMutation } from 'api/apiSlice'

export const useUpdateTask = () => {
  const [ updateTask ] = useUpdateTaskMutation()

  return { updateTask }
}

export const useUpdateTaskComplete = () => {
  const [ updateTaskComplete ] = useUpdateTaskCompleteMutation()

  return { updateTaskComplete }
}
