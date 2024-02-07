import { render, screen, fireEvent } from '@testing-library/react'
import Counter from '../Counter' // Adjust the import path as necessary

describe('Counter Component', () => {
  test('initially displays a count of 0', () => {
    render(<Counter />)
    const countElement = screen.queryByText('0')
    expect(countElement).not.toBeNull() // Using not.toBeNull to assert the element is present
  })

  test('increments count by 1 when the + button is clicked', () => {
    render(<Counter />)
    const incrementButton = screen.getByText('+')
    fireEvent.click(incrementButton)
    const countElement = screen.queryByText('1')
    expect(countElement).not.toBeNull() // Using not.toBeNull to assert the element is present
  })

  test('decrements count by 1 when the - button is clicked', () => {
    render(<Counter />)
    const decrementButton = screen.getByText('-')
    fireEvent.click(decrementButton)
    const countElement = screen.queryByText('-1')
    expect(countElement).not.toBeNull() // Using not.toBeNull to assert the element is present
  })
})
