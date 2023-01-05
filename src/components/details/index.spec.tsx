import {
  fireEvent,
  render,
  screen
} from '@testing-library/react'

import { act } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import { API_SLICE } from 'api/apiSlice'

import { TASK } from 'mocks'

import { ApiProvider } from '@reduxjs/toolkit/query/react'

import { Details } from './'

beforeEach(() => {
  global.window = Object.create(window)
  Object.defineProperty(window, 'location', {
    value: { pathname: `/${TASK.id}` },
    writable: true
  })
  Object.defineProperty(window, 'confirm', {
    value: jest.fn(),
    writable: true
  })

  return render(
    <ApiProvider api={ API_SLICE }>
      <Details { ...TASK } />
    </ApiProvider>
    , { wrapper: MemoryRouter }
  )
}
)

describe('Details', () => {
  it('Render', () => {
    expect(screen).toBeTruthy()
  })

  it('Search components with the data', () => {
    expect(screen.getByText(TASK.title)).toBeInTheDocument()

    expect(screen.getByText(TASK.description)).toBeInTheDocument()
  })

  it('Click button Back and check path Home', () => {
    const BUTTON_BACK = screen.getByText('Back')

    fireEvent.click(BUTTON_BACK)

    Object.defineProperty(window, 'location', { value: { pathname: '/' } })

    expect(window.location.pathname).toEqual('/')

    expect(BUTTON_BACK).toBeInTheDocument()
  })

  it('Click button Edit and check path of Edit', () => {
    const BUTTON_EDIT = screen.getByText('Edit')

    fireEvent.click(BUTTON_EDIT)

    Object.defineProperty(window, 'location', { value: { pathname: `/${TASK.id}/edit` } })

    expect(location.pathname).toEqual(`/${TASK.id}/edit`)

    expect(BUTTON_EDIT).toBeInTheDocument()
  })

  it('Click button Delete', () => {
    const BUTTON_DELETE = screen.getByText('Delete')

    fireEvent.click(BUTTON_DELETE)

    expect(BUTTON_DELETE).toBeInTheDocument()
  })

  it('Click button Delete. Not confirm', () => {
    const BUTTON_DELETE_NOT_CONFIRM = screen.getByText('Delete')

    window.confirm = jest.fn().mockImplementation(() => false)

    fireEvent.click(BUTTON_DELETE_NOT_CONFIRM)

    expect(window.confirm).toBeCalled()

    expect(BUTTON_DELETE_NOT_CONFIRM).toBeInTheDocument()
  })

  it('Click button Delete. Yes confirm and check path Home', () => {
    const BUTTON_DELETE_YES_CONFIRM = screen.getByText('Delete')

    act(() => {
      window.confirm = jest.fn().mockImplementation(() => true)

      fireEvent.click(BUTTON_DELETE_YES_CONFIRM)

      Object.defineProperty(window, 'location', { value: { pathname: '/' } })
    })

    expect(window.confirm).toBeCalled()

    expect(location.pathname).toEqual('/')

    expect(BUTTON_DELETE_YES_CONFIRM).toBeInTheDocument()
  })
})
