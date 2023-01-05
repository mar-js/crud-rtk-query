import {
  fireEvent,
  render,
  screen
} from '@testing-library/react'

import { act } from 'react-dom/test-utils'

import { MemoryRouter } from 'react-router-dom'

import { API_SLICE } from 'api/apiSlice'

import { TASK } from 'mocks'

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'

import { Task } from './'

beforeEach(() => {
  global.window = Object.create(window)
  Object.defineProperty(window, 'location', {
    value: { pathname: '/' },
    writable: true
  })

  return render(
    <ApiProvider api={ API_SLICE }>
      <Task { ...TASK } />
    </ApiProvider>
    , { wrapper: MemoryRouter }
  )
})

describe('Task', () => {
  it('Render', () => {
    expect(screen).toBeTruthy()
  })

  it('Search components with the data', () => {
    expect(screen.getByText(TASK.title)).toBeInTheDocument()

    expect(screen.getByText(TASK.description)).toBeInTheDocument()
  })

  it('Click in button View and check path of the Task', () => {
    const BUTTON_VIEW = screen.getByText('View')

    fireEvent.click(BUTTON_VIEW)

    Object.defineProperty(window, 'location', { value: { pathname: `/${TASK.id}` } })

    expect(location.pathname).toEqual(`/${TASK.id}`)

    expect(BUTTON_VIEW).toBeInTheDocument()
  })

  it('Change value of checkbox', async () => {
    const CHECKBOX_LABEL = screen.getByTestId('checkbox')

    expect(CHECKBOX_LABEL).toBeInTheDocument()

    const CHECKBOX_INPUT = CHECKBOX_LABEL.firstElementChild as HTMLInputElement

    expect(CHECKBOX_INPUT).toBeInTheDocument()

    expect(CHECKBOX_INPUT.checked).toEqual(false)

    await act(async () => fireEvent.click(CHECKBOX_LABEL))

    expect(CHECKBOX_LABEL).toBeChecked
  })
})
