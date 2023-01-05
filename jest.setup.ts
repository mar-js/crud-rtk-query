// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import 'whatwg-fetch'

import { TASK, TASKS } from 'mocks'

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(),
    useParams: () => ({ id: '1' })
  }
})

jest.mock('./src/api/apiSlice', () => {
  const originalModule = jest.requireActual('./src/api/apiSlice')

  return {
    __esModule: true,
    ...originalModule,
    useCreateTaskMutation: () => jest.fn(),
    useGetTasksQuery: () => () => ({
      isLoading: false,
      data: TASKS,
      isError: false,
      error: undefined
    }),
    useGetTaskQuery: () => ({
      isLoading: false,
      data: TASK,
      isError: false,
      error: undefined
    }),
    useUpdateTaskMutation: () => jest.fn(),
    useUpdateTaskCompleteMutation: () => jest.fn(),
    useDeleteTaskMutation: () => jest.fn()
  }
})

jest.mock('./src/hooks/use-back', () => {
  const originalModule = jest.requireActual('./src/hooks/use-back')

  return {
    __esModule: true,
    ...originalModule,
    useBack: () => ({ navigate: jest.fn() })
    // default: jest.fn()
  }
})

jest.mock('./src/hooks/use-create', () => {
  const originalModule = jest.requireActual('./src/hooks/use-create')

  return {
    __esModule: true,
    ...originalModule,
    useCreate: () => ({ createTask: jest.fn() })
  }
})

jest.mock('./src/hooks/use-delete', () => {
  const originalModule = jest.requireActual('./src/hooks/use-delete')

  return {
    __esModule: true,
    ...originalModule,
    useDelete: () => ({ deleteTask: jest.fn() })
  }
})

jest.mock('./src/hooks/use-update', () => {
  const originalModule = jest.requireActual('./src/hooks/use-update')

  return {
    __esModule: true,
    ...originalModule,
    useUpdateTask: () => ({ updateTask: jest.fn() }),
    useUpdateTaskComplete: () => ({ updateTaskComplete: jest.fn() })
  }
})
