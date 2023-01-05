import { renderHook, act } from '@testing-library/react'

import { useBack } from './'

describe('useBack', () => {
  it('Should back', () => {
    const { result } = renderHook(() => useBack())

    act(() => {
      result.current.navigate('/1')

      Object.defineProperty(window, 'location', { value: { pathname: '/1' } })
    })

    expect(window.location.pathname).toEqual('/1')
  })
})
