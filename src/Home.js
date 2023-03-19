import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatApp from './components/ChatApp';
import Header from './components/Header';
import { Login } from './components/Login';
import LogOut from './components/LogOut';
import { auth } from './firebase';

export const Home = () => {
    const [user] = useAuthState(auth);

  return (
    <div>
        {user ? <LogOut /> : <Header/>}
        {user ? (
          <ChatApp />
        ) : (
          <Login/>
        )}
    </div>
  )
}
