import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Card from './Card'

describe('Card component', () => {
  const defaultProps = {
    title: 'Test Product',
    thumbnail: 'https://example.com/image.jpg',
    price: 29.99,
    showMore: vi.fn(),
  }

  it('should render the title', () => {
    render(<Card {...defaultProps} />)
    expect(screen.getByText('Test Product')).toBeInTheDocument()
  })

  it('should render the price', () => {
    render(<Card {...defaultProps} />)
    expect(screen.getByText('29.99')).toBeInTheDocument()
  })

  it('should render the image with correct src and alt', () => {
    render(<Card {...defaultProps} />)
    const img = screen.getByAltText('Test Product')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  it('should render the "show more.." button', () => {
    render(<Card {...defaultProps} />)
    expect(screen.getByText('show more..')).toBeInTheDocument()
  })

  it('should call showMore when button is clicked', () => {
    const showMore = vi.fn()
    render(<Card {...defaultProps} showMore={showMore} />)
    fireEvent.click(screen.getByText('show more..'))
    expect(showMore).toHaveBeenCalledTimes(1)
  })

  it('should render with different props', () => {
    render(
      <Card
        title="Another Product"
        thumbnail="https://example.com/other.jpg"
        price={99.99}
        showMore={vi.fn()}
      />
    )
    expect(screen.getByText('Another Product')).toBeInTheDocument()
    expect(screen.getByText('99.99')).toBeInTheDocument()
  })
})
