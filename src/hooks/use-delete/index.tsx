
import { useDeleteTaskMutation } from 'api/apiSlice'

export const useDelete = () => {
  const [ deleteTask ] = useDeleteTaskMutation()

  return { deleteTask }
}
