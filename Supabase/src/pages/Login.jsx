import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault()
        console.log(email, password);

        const { data, error } = await supabase.auth.signInWithPassword({
            email, password
        })
        if (error) {
            alert(error.message)

        } else {
            console.log(data.user);
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