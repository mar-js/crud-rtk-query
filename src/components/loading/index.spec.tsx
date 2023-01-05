import { render, screen } from '@testing-library/react'

import { Loading } from './'

beforeEach(() => render(<Loading />))

describe('Loading', () => {
  it('Render', () => {
    expect(screen).toBeTruthy()
  })
})
