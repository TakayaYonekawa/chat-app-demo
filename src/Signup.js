import { Button } from "@mui/material";
import React, { useRef } from "react";
import Header from "./components/Header";
import { signup } from "./firebase";
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();
  const navigate = useNavigate();

  const handleSignup = async () => {
    try{
      await signup(signupEmailRef.current.value, signupPasswordRef.current.value);
     } catch {
        alert('エラーが発生しました。')
        return;
     }
    navigate('/chat-demo/profile/');

  };

  return (
    <div>
      <Header />
      <div className="login-box">
      <div className="container">
        <h2>アカウント作成</h2>
        <input ref={signupEmailRef} placeholder="Email" />
        <br />
        <input ref={signupPasswordRef} type="password" placeholder="Password" />
        <br />
        <Button onClick={handleSignup}>アカウント作成</Button>
      </div>
      </div>
    </div>
  );
};
