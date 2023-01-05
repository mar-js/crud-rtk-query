import { render, screen } from '@testing-library/react'

import { Main } from './'

beforeEach(() => render(
  <Main>
    <h2>HI, WELCOME</h2>
  </Main>
))

describe('Main', () => {
  it('Render', () => {
    expect(screen).toBeTruthy()
  })

  it('Check if have children', () => {
    const CHILDREN = screen.getByText(/HI/i).textContent

    expect(CHILDREN).toEqual('HI, WELCOME')
  })
})
