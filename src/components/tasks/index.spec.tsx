import { render, screen } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'

import { API_SLICE } from 'api/apiSlice'

import { TASKS } from 'mocks'

import { Tasks } from './'

beforeEach(() => {
  global.window = Object.create(window)
  Object.defineProperty(window, 'location', {
    value: { pathname: '/' },
    writable: true
  })

  return render(
    <ApiProvider api={ API_SLICE }>
      <Tasks tasks={ TASKS } />
    </ApiProvider>
    , { wrapper: MemoryRouter }
  )
})

describe('Tasks', () => {
  it('Render', () => {
    expect(screen).toBeTruthy()
  })

  it('Search components with the data', () => {
    expect(screen.getByText(TASKS[1].title)).toBeInTheDocument()

    expect(screen.getByText(TASKS[1].description)).toBeInTheDocument()
  })
})
