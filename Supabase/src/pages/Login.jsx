import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({
            email, password
        })
        if (error) {
            alert(error.message)
        } else {
            navigate('/')

        }

    }
    return (
        <>
            <form onSubmit={loginUser}>
                <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Enter Your password.' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login