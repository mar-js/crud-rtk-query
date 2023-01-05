import { render, screen } from '@testing-library/react'

import { Header } from './'

beforeEach(() => render(
  <Header>
    <h2>Hello Word!!</h2>
  </Header>
))

describe('Header', () => {
  it('Render', () => {
    expect(screen).toBeTruthy()
  })

  it('Check if have children', () => {
    const CHILDREN = screen.getByText(/Hello/i).textContent

    expect(CHILDREN).toEqual('Hello Word!!')
  })
})
