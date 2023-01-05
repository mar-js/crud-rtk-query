import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITask } from 'interfaces'

export const API_SLICE = createApi({
  reducerPath: 'api',
  tagTypes: [ 'GET_TASKS', 'GET_TASK' ],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: ({ query, mutation }) => ({
    createTask: mutation<unknown, ITask>({
      query: (newTask) => ({
        url: 'tasks',
        method: 'POST',
        body: newTask
      }),
      invalidatesTags: [ 'GET_TASKS' ]
    }),
    getTasks: query<ITask[], void>({
      query: () => '/tasks',
      providesTags: [ 'GET_TASKS' ]
    }),
    getTask: query<ITask, number>({
      query: (id) => ({ url: `/tasks/${id}` }),
      providesTags: [ 'GET_TASK' ]
    }),
    updateTask: mutation<unknown, ITask>({
      query: (editTask) => ({
        url: `/tasks/${editTask.id}`,
        method: 'PUT',
        body: editTask
      }),
      invalidatesTags: [ 'GET_TASKS', 'GET_TASK' ]
    }),
    updateTaskComplete: mutation<unknown, ITask>({
      query: (editTask) => ({
        url: `/tasks/${editTask.id}`,
        method: 'PATCH',
        body: editTask
      }),
      invalidatesTags: [ 'GET_TASKS' ]
    }),
    deleteTask: mutation<unknown, number>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [ 'GET_TASKS', 'GET_TASK' ]
    })
  })
})

export const {
  useCreateTaskMutation,
  useGetTasksQuery,
  useGetTaskQuery,
  useUpdateTaskMutation,
  useUpdateTaskCompleteMutation,
  useDeleteTaskMutation
} = API_SLICE
