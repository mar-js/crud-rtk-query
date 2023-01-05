import { renderHook, act } from '@testing-library/react'

import { ITask } from 'interfaces'

import { useCreate } from './'

describe('useCreate', () => {
  it('Should create task', () => {
    const { result } = renderHook(() => useCreate())
    const NEW_DATA: ITask = {
      id: 22,
      title: 'Aprender XML',
      description: 'Leer documentación',
      completed: true
    }
    const { createTask } = result.current

    act(() => {
      createTask(NEW_DATA)
    })

    expect(createTask).toBeCalled()
  })
})
