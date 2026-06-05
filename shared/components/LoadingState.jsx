import React from 'react'

/**
 * Renders loading, error, or children based on fetch state.
 * @param {{ loading: boolean, error: boolean, children: React.ReactNode, loadingMessage?: string, errorMessage?: string }} props
 */
function LoadingState({
  loading,
  error,
  children,
  loadingMessage = 'Loading...',
  errorMessage = 'Something went wrong!',
}) {
  if (loading) return <h2>{loadingMessage}</h2>
  if (error) return <h2>{errorMessage}</h2>
  return <>{children}</>
}

export default LoadingState
