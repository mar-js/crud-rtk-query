import { renderHook, act } from '@testing-library/react'

import { useDelete } from './'

describe('useDelete', () => {
  it('Should delete task', () => {
    const { result } = renderHook(() => useDelete())
    const { deleteTask } = result.current

    act(() => {
      deleteTask(1)
    })

    expect(deleteTask).toBeCalled()
  })
})
