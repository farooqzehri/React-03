import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from '../supabase'

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        supabase.auth.getUser().then(({ data, error }) => {
            if (!error && data.user) {
                setUser(data.user)
            }
            setLoading(false)
        })
    }, [])

    if (loading) return <p>Loading...</p>
    if (!user) return <Navigate to="/login" replace />

    return children
}

export default ProtectedRoute
