import { useEffect } from 'react'
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    useEffect(() => {

        const getUser = async () => {
            const { data, error } = await supabase.auth.getUser()
            if (error) {
                navigate('/login')
                return
            }

        }
        getUser()
    }, [])

    // sign out user
    const signOutUser = async () => {
        const { error } = await supabase.auth.signOut()
        navigate('/login')
    }
    return (
        <div>Home

            <button onClick={signOutUser}>Sign Out</button>
        </div>
    )
}

export default Home