import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('Todo List App', () => {
  it('should render the header', () => {
    render(<App />)
    expect(screen.getByText('Task Manager')).toBeInTheDocument()
    expect(screen.getByText(/Your/)).toBeInTheDocument()
  })

  it('should show empty state when no todos exist', () => {
    render(<App />)
    expect(screen.getByText('Nothing here yet')).toBeInTheDocument()
  })

  it('should show 0 tasks total initially', () => {
    render(<App />)
    expect(screen.getByText('0 tasks total')).toBeInTheDocument()
  })

  it('should add a todo when form is submitted', () => {
    render(<App />)
    const titleInput = screen.getByPlaceholderText('Task title...')
    const submitBtn = screen.getByText('+ Add Task')

    fireEvent.change(titleInput, { target: { value: 'Test task' } })
    fireEvent.click(submitBtn)

    expect(screen.getByText('Test task')).toBeInTheDocument()
  })

  it('should not add a todo with empty title', () => {
    render(<App />)
    const submitBtn = screen.getByText('+ Add Task')
    fireEvent.click(submitBtn)
    expect(screen.getByText('Nothing here yet')).toBeInTheDocument()
  })

  it('should add a todo with title and description', () => {
    render(<App />)
    const titleInput = screen.getByPlaceholderText('Task title...')
    const descInput = screen.getByPlaceholderText('Short description...')
    const submitBtn = screen.getByText('+ Add Task')

    fireEvent.change(titleInput, { target: { value: 'My task' } })
    fireEvent.change(descInput, { target: { value: 'My description' } })
    fireEvent.click(submitBtn)

    expect(screen.getByText('My task')).toBeInTheDocument()
    expect(screen.getByText('My description')).toBeInTheDocument()
  })

  it('should clear inputs after adding a todo', () => {
    render(<App />)
    const titleInput = screen.getByPlaceholderText('Task title...')
    const descInput = screen.getByPlaceholderText('Short description...')
    const submitBtn = screen.getByText('+ Add Task')

    fireEvent.change(titleInput, { target: { value: 'Test' } })
    fireEvent.change(descInput, { target: { value: 'Desc' } })
    fireEvent.click(submitBtn)

    expect(titleInput.value).toBe('')
    expect(descInput.value).toBe('')
  })

  it('should update the task count after adding todos', () => {
    render(<App />)
    const titleInput = screen.getByPlaceholderText('Task title...')
    const submitBtn = screen.getByText('+ Add Task')

    fireEvent.change(titleInput, { target: { value: 'Task 1' } })
    fireEvent.click(submitBtn)
    expect(screen.getByText('1 task total')).toBeInTheDocument()

    fireEvent.change(titleInput, { target: { value: 'Task 2' } })
    fireEvent.click(submitBtn)
    expect(screen.getByText('2 tasks total')).toBeInTheDocument()
  })

  it('should render the form labels', () => {
    render(<App />)
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('should display task index numbers', () => {
    render(<App />)
    const titleInput = screen.getByPlaceholderText('Task title...')
    const submitBtn = screen.getByText('+ Add Task')

    fireEvent.change(titleInput, { target: { value: 'First task' } })
    fireEvent.click(submitBtn)

    expect(screen.getByText('01')).toBeInTheDocument()
  })
})
