import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import {  upload,useAuth } from "./firebase";
import { Link, useNavigate } from 'react-router-dom'
import iconImage from './asset/icon.png'


export const Profile = () => {
  const currentUser = useAuth()
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(iconImage)

  const handleChangeFile = (e) => {
    if(e.target.files[0]){
      setPhoto(e.target.files[0]);
    }
  }


  const handleSignup = async () => {
    try{
      await upload(photo, currentUser )
            navigate('/');
     } catch {
        alert('エラーが発生しました。')
        return;
     }

  };

  useEffect(() => {
    if(currentUser?.photoURL){
      setPhotoURL(currentUser.photoURL);
      console.log(photo);
    }
  },[currentUser])

  return (
    <div>
      <Header />
      <div className="login-box">
      <div className="container">
        <h2>アカウント用の写真</h2>
        <br />
        <input onChange={handleChangeFile} type="file" />
        <br />
        <img src={photoURL} className='account-image'/>
        <br />


        <Button onClick={handleSignup}>アカウント作成</Button><Link to={'/chat-demo/'}>スキップ</Link>
      </div>
      </div>
    </div>
  );
};
