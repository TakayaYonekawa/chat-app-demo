import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import FooterMessage from "./FooterMessage";
import iconImage from '../asset/icon.png'

function ChatApp() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);


  

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useLayoutEffect(() => {
    if(scroll.current){
      scroll.current.scrollIntoView();
    }
  },[messages])

  return (
    <div>
      <div className="container">

      <div className="messages">
        {/* {console.log(messages)} */}
        {messages.map(({ id, uid, text, photoURL }) => (
          <div className="message-list">
          <div className={`message ${uid === auth.currentUser.uid ? 'me' : 'you'}`} key={id}>
            <img src={photoURL || iconImage} />
            <p>{text}</p>
          </div>
          </div>
        ))}
      </div>
      </div>
      <FooterMessage />
      <div ref={scroll}></div>
    </div>
  );
}

export default ChatApp;
