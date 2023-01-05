import { render, screen } from '@testing-library/react'

import { ERROR } from 'mocks'

import { Error } from './'

beforeEach(() => render(<Error { ...ERROR } />))

describe('Error', () => {
  it('Render', () => {
    expect(screen).toBeTruthy()
  })

  it('Search text of error', () => {
    const TEXT = screen.getByText(/Error:/i).textContent

    expect(TEXT).toEqual(`Error: "${ERROR.error}"`)
  })
})
