import React from 'react'
import { Button } from '@mui/material'
import { auth } from '../firebase'

function LogOut() {
  return (
    <div>
    <header>
    <div className='container'>
        <div>
           <Button onClick={() => auth.signOut()}>ログアウト</Button> 
        </div>
    </div>
</header>
</div>
  )
}

export default LogOut