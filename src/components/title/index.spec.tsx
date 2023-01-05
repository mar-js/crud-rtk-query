import {
  fireEvent, render, screen
} from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import { Title } from './'

beforeEach(() => render(<Title />, { wrapper: MemoryRouter }))

describe('Title', () => {
  it('Render', () => {
    expect(screen).toBeTruthy()
  })

  it('Search compenent of text', () => {
    const H1 = screen.getByText('RTK Query')

    expect(H1).toBeInTheDocument()
  })

  it('Click in title for back Home and check path', () => {
    const H1 = screen.getByText('RTK Query')

    expect(H1).toBeInTheDocument()

    fireEvent.click(H1)

    expect(window.location.pathname).toEqual('/')
  })
})
