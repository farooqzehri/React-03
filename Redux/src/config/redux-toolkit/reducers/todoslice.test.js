import { describe, it, expect } from 'vitest'
import todoReducer, { addTodo, deletTodo, editTodo } from './todoslice'

describe('todoslice reducer', () => {
  const getInitialState = () => todoReducer(undefined, { type: 'unknown' })

  it('should return the initial state with one default todo', () => {
    const state = getInitialState()
    expect(state.todo).toHaveLength(1)
    expect(state.todo[0].title).toBe('Hello World')
    expect(state.todo[0].id).toBeDefined()
  })

  describe('addTodo', () => {
    it('should add a new todo to the list', () => {
      const state = getInitialState()
      const newState = todoReducer(state, addTodo({ title: 'Buy groceries' }))
      expect(newState.todo).toHaveLength(2)
      expect(newState.todo[1].title).toBe('Buy groceries')
      expect(newState.todo[1].id).toBeDefined()
    })

    it('should assign a unique id to each new todo', () => {
      let state = getInitialState()
      state = todoReducer(state, addTodo({ title: 'First' }))
      state = todoReducer(state, addTodo({ title: 'Second' }))
      const ids = state.todo.map(t => t.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })

    it('should preserve existing todos when adding', () => {
      const state = getInitialState()
      const originalTitle = state.todo[0].title
      const newState = todoReducer(state, addTodo({ title: 'New task' }))
      expect(newState.todo[0].title).toBe(originalTitle)
    })
  })

  describe('deletTodo', () => {
    it('should delete a todo by id', () => {
      const state = getInitialState()
      const idToDelete = state.todo[0].id
      const newState = todoReducer(state, deletTodo({ id: idToDelete }))
      expect(newState.todo).toHaveLength(0)
    })

    it('should only delete the targeted todo', () => {
      let state = getInitialState()
      state = todoReducer(state, addTodo({ title: 'Keep this' }))
      const idToDelete = state.todo[0].id
      const newState = todoReducer(state, deletTodo({ id: idToDelete }))
      expect(newState.todo).toHaveLength(1)
      expect(newState.todo[0].title).toBe('Keep this')
    })
  })

  describe('editTodo', () => {
    it('should update the title of a todo by id', () => {
      const state = getInitialState()
      const id = state.todo[0].id
      const newState = todoReducer(state, editTodo({ id, title: 'Updated title' }))
      expect(newState.todo[0].title).toBe('Updated title')
    })

    it('should only edit the targeted todo', () => {
      let state = getInitialState()
      state = todoReducer(state, addTodo({ title: 'Second item' }))
      const id = state.todo[0].id
      const newState = todoReducer(state, editTodo({ id, title: 'Changed' }))
      expect(newState.todo[0].title).toBe('Changed')
      expect(newState.todo[1].title).toBe('Second item')
    })

    it('should preserve the id when editing', () => {
      const state = getInitialState()
      const id = state.todo[0].id
      const newState = todoReducer(state, editTodo({ id, title: 'New title' }))
      expect(newState.todo[0].id).toBe(id)
    })
  })
})
