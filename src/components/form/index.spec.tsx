import {
  fireEvent,
  render,
  screen
} from '@testing-library/react'

import { TASK } from 'mocks'

import { Form } from './'

describe('Form', () => {
  describe('POST', () => {
    beforeEach(() => render(<Form />))

    it('Render', () => {
      expect(screen).toBeTruthy()
    })

    it('Create new Task', () => {
      const INPUT_TITLE = screen.getByPlaceholderText('Task task...') as HTMLInputElement
      const INPUT_DESCRIPTION = screen.getByPlaceholderText('Lorem lorem...') as HTMLInputElement
      const BUTTON = screen.getByRole('button')

      expect(INPUT_TITLE).toBeInTheDocument()
      expect(INPUT_DESCRIPTION).toBeInTheDocument()
      expect(BUTTON).toBeInTheDocument()

      fireEvent.change(INPUT_TITLE, { target: { value: 'APRENDER JS' } })
      fireEvent.change(INPUT_DESCRIPTION, { target: { value: 'VER VIDEOS' } })

      expect(INPUT_TITLE.value).toEqual('APRENDER JS')
      expect(INPUT_DESCRIPTION.value).toEqual('VER VIDEOS')

      fireEvent.click(BUTTON)

      expect(INPUT_TITLE.value).toEqual('')
      expect(INPUT_DESCRIPTION.value).toEqual('')
    })
  })

  describe('PUT', () => {
    beforeEach(() => {
      global.window = Object.create(window)
      Object.defineProperty(window, 'location', {
        value: { pathname: `/${TASK.id}/edit` },
        writable: true
      })

      return render(<Form isEdit />)
    })

    it('Render', () => {
      expect(screen).toBeTruthy()
    })

    it('Check page edit', () => {
      expect(location.pathname).toEqual(`/${TASK.id}/edit`)
    })

    it('Click in button back', () => {
      const BUTTON = screen.getByText('Back')

      expect(BUTTON).toBeInTheDocument()

      fireEvent.click(BUTTON)

      Object.defineProperty(window, 'location', { value: { pathname: '/' } })

      expect(window.location.pathname).toEqual('/')
    })

    it('Edit Task', () => {
      const INPUT_TITLE = screen.getByPlaceholderText('Task task...') as HTMLInputElement
      const INPUT_DESCRIPTION = screen.getByPlaceholderText('Lorem lorem...') as HTMLInputElement
      const BUTTON = screen.getByText('Edit')

      expect(INPUT_TITLE).toBeInTheDocument()
      expect(INPUT_DESCRIPTION).toBeInTheDocument()
      expect(BUTTON).toBeInTheDocument()

      fireEvent.change(INPUT_TITLE, { target: { value: 'APRENDER JS' } })
      fireEvent.change(INPUT_DESCRIPTION, { target: { value: 'VER VIDEOS' } })

      expect(INPUT_TITLE.value).toEqual('APRENDER JS')
      expect(INPUT_DESCRIPTION.value).toEqual('VER VIDEOS')

      fireEvent.click(BUTTON)

      Object.defineProperty(window, 'location', { value: { pathname: '/' } })

      expect(window.location.pathname).toEqual('/')
    })
  })
})
