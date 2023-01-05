import {
  fireEvent,
  render,
  screen
} from '@testing-library/react'

import { BtnBack } from './'

beforeEach(() =>render(<BtnBack />))

describe('BtnBack', () => {
  it('Render', () => {
    expect(screen).toBeTruthy()
  })

  it('Search button', () => {
    const BUTTON = screen.getByText('Back')
    fireEvent.click(BUTTON)

    expect(BUTTON).toBeTruthy()
  })
})
