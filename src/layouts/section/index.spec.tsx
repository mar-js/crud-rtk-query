import { render, screen } from '@testing-library/react'

import { Section } from './'

beforeEach(() => render(
  <Section>
    <h2>HELLO, HI. AA</h2>
  </Section>
))

describe('Section', () => {
  it('Render', () => {
    expect(screen).toBeTruthy()
  })

  it('Check if have children', () => {
    const CHILDREN = screen.getByText(/HI/i).textContent

    expect(CHILDREN).toEqual('HELLO, HI. AA')
  })
})
