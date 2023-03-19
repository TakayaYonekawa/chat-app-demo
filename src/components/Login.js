import { Button } from '@mui/material'
import firebase from 'firebase/compat/app'
import React, { useRef } from 'react'
import { auth, login } from '../firebase';
import { Link } from 'react-router-dom';


export const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();


    const handleLogin = async () => {
        await login(emailRef.current.value, passwordRef.current.value)
    }

    const googleLoginPopup = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

  return (
    <div className='login-box'>
        <div className='container'>
        <h2>ログインしてください</h2>
        <div>
        <input ref={emailRef} placeholder="Email" /><br/>
        <input ref={passwordRef} type="password" placeholder="Password" /><br/>
        <button onClick={handleLogin}>ログイン</button>
        </div>

        <Button onClick={googleLoginPopup}> Googleでログイン</Button> 
        <Link to={'/signup/'}>サインアップ</Link>
        
        </div>
    </div>
  )
}
