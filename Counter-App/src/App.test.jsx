import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('Counter App', () => {
  it('should render with initial counter value of 0', () => {
    render(<App />)
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('Counter')).toBeInTheDocument()
  })

  it('should increment the counter when + is clicked', () => {
    render(<App />)
    const incrementBtn = screen.getByText('+')
    fireEvent.click(incrementBtn)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('should decrement the counter when - is clicked', () => {
    render(<App />)
    const decrementBtn = screen.getByText('\u2212')
    fireEvent.click(decrementBtn)
    expect(screen.getByText('-1')).toBeInTheDocument()
  })

  it('should reset the counter to 0 when Reset is clicked', () => {
    render(<App />)
    const incrementBtn = screen.getByText('+')
    fireEvent.click(incrementBtn)
    fireEvent.click(incrementBtn)
    fireEvent.click(incrementBtn)
    expect(screen.getByText('3')).toBeInTheDocument()

    const resetBtn = screen.getByText('Reset')
    fireEvent.click(resetBtn)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('should handle multiple increments correctly', () => {
    render(<App />)
    const incrementBtn = screen.getByText('+')
    for (let i = 0; i < 5; i++) {
      fireEvent.click(incrementBtn)
    }
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('should handle mixed increment and decrement', () => {
    render(<App />)
    const incrementBtn = screen.getByText('+')
    const decrementBtn = screen.getByText('\u2212')

    fireEvent.click(incrementBtn)
    fireEvent.click(incrementBtn)
    fireEvent.click(decrementBtn)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('should display the Value label', () => {
    render(<App />)
    expect(screen.getByText('Value')).toBeInTheDocument()
  })
})
