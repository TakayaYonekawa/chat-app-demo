import {  Input } from '@mui/material'
import React, { useState } from 'react'
import { auth, db } from '../firebase';
import firebase from "firebase/compat/app";
import SendIcon from "@mui/icons-material/Send";



function FooterMessage({scroll}) {
    const [message, setMessage] = useState('');
    
    const handleSubmit = (e) => {
            e.preventDefault();
            if(message === ''){
                return
            }

            const {uid, photoURL} = auth.currentUser;


            db.collection('messages').add({
                text: message,
                photoURL,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            setMessage('');

    } 


  return (
    <div className='footer'>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <Input 
                style={{backgroundColor:'#333'}}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <button type='submit' className='submit'>
                <SendIcon style={{color: '#7AC2FF'}}/>
                </button>
            </form>
        </div>
    </div>
  )
}

export default FooterMessage