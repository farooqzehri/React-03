import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './config/redux-toolkit/reducers/todoslice'
import App from './App'

function renderWithStore(preloadedState) {
  const store = configureStore({
    reducer: { todo: todoReducer },
    preloadedState,
  })
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

describe('Redux Todo App', () => {
  it('should render the default todo from initial state', () => {
    renderWithStore()
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('should render the input and Add Todo button', () => {
    renderWithStore()
    expect(screen.getByPlaceholderText('Enter The input')).toBeInTheDocument()
    expect(screen.getByText('Add Todo')).toBeInTheDocument()
  })

  it('should add a new todo when form is submitted', () => {
    renderWithStore()
    const input = screen.getByPlaceholderText('Enter The input')
    fireEvent.change(input, { target: { value: 'New todo item' } })
    fireEvent.submit(input.closest('form'))

    expect(screen.getByText('New todo item')).toBeInTheDocument()
  })

  it('should clear the input after adding a todo', () => {
    renderWithStore()
    const input = screen.getByPlaceholderText('Enter The input')
    fireEvent.change(input, { target: { value: 'Something' } })
    fireEvent.submit(input.closest('form'))

    expect(input.value).toBe('')
  })

  it('should delete a todo when delete button is clicked', () => {
    renderWithStore()
    const deleteButtons = screen.getAllByText('delete Todo')
    fireEvent.click(deleteButtons[0])

    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
  })

  it('should render delete and edit buttons for each todo', () => {
    renderWithStore()
    expect(screen.getByText('delete Todo')).toBeInTheDocument()
    expect(screen.getByText('edit todo')).toBeInTheDocument()
  })
})
