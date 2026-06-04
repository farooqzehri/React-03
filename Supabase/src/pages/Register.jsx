import { useState } from 'react'
import { supabase } from '../supabase'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const registerUser = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            alert('Email and password are required.')
            return
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.')
            return
        }

        const { data, error } = await supabase.auth.signUp({
            email, password
        })
        if (error) {
            alert(error.message)
        } else {
            alert('Check your email for confirmation!')
        }

    }
    return (

        <>
            <form onSubmit={registerUser}>
                <input type="email" value={email} placeholder='Enter Your Email..' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} placeholder='Enter Your Password..' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Register</button>
            </form>
        </>
    )
}

export default Register