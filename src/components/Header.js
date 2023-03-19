import { Button } from '@mui/material'
import firebase from 'firebase/compat/app'
import React from 'react'
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

function Header() {

    const googleLoginPopup = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

  return (
    <header>
      <div className='container'>
        <Link to={'/chat-demo'}>
        <h1>
          チャットアプリ
        </h1>
        </Link>

      </div>
    </header>
  )
}

export default Header