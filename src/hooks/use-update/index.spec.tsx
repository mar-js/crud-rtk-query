import { renderHook, act } from '@testing-library/react'

import { ITask } from 'interfaces'

import { useUpdateTask, useUpdateTaskComplete } from './'

describe('useUpdateTask', () => {
  it('Should update task', () => {
    const { result } = renderHook(() => useUpdateTask())
    const EDIT_DATA: ITask = {
      id: 22,
      title: 'Aprender HTML',
      description: 'Leer documentación',
      completed: true
    }
    const { updateTask } = result.current

    act(() => {
      updateTask(EDIT_DATA)
    })

    expect(updateTask).toBeCalled()
  })
})

describe('useUpdateTaskComplete', () => {
  it('Should update task complete', () => {
    const { result } = renderHook(() => useUpdateTaskComplete())
    const EDIT_DATA: ITask = {
      id: 22,
      title: 'Aprender HTML',
      description: 'Leer documentación',
      completed: false
    }
    const { updateTaskComplete } = result.current

    act(() => {
      updateTaskComplete(EDIT_DATA)
    })

    expect(updateTaskComplete).toBeCalled()
  })
})
