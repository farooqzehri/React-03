import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import UseFetch from './UseFetch'

describe('UseFetch hook', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('should start with loading true and no data', () => {
    vi.spyOn(global, 'fetch').mockImplementation(() => new Promise(() => {}))
    const { result } = renderHook(() => UseFetch('https://api.example.com/data'))
    const [loading, error, data] = result.current
    expect(loading).toBe(true)
    expect(error).toBe(false)
    expect(data).toBeNull()
  })

  it('should return data on successful fetch', async () => {
    const mockData = [{ id: 1, name: 'Test' }]
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve(mockData),
    })

    const { result } = renderHook(() => UseFetch('https://api.example.com/data'))

    await waitFor(() => {
      expect(result.current[0]).toBe(false)
    })

    const [loading, error, data] = result.current
    expect(loading).toBe(false)
    expect(error).toBe(false)
    expect(data).toEqual(mockData)
  })

  it('should set error to true on fetch failure', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'))

    const { result } = renderHook(() => UseFetch('https://api.example.com/data'))

    await waitFor(() => {
      expect(result.current[0]).toBe(false)
    })

    const [loading, error, data] = result.current
    expect(loading).toBe(false)
    expect(error).toBe(true)
    expect(data).toBeNull()
  })

  it('should call fetch with the provided URL', async () => {
    const fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve([]),
    })

    renderHook(() => UseFetch('https://api.example.com/products'))

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith('https://api.example.com/products')
    })
  })
})
