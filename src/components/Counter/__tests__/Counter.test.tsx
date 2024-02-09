import { render, screen } from '@testing-library/react'
import { Counter } from './../Counter'

// FIXME: This test is failing...

test('renders with initial count', () => {
  render(<Counter />)
  expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument()
  expect(screen.getByText('0')).toBeInTheDocument()
})
