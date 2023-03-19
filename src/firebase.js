import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBA8p_UFNRCkqFiCT0RfGU-VrUoncBJYaw",
  authDomain: "fire-to-bbf9f.firebaseapp.com",
  projectId: "fire-to-bbf9f",
  storageBucket: "fire-to-bbf9f.appspot.com",
  messagingSenderId: "811899394240",
  appId: "1:811899394240:web:b93ab0d6c5173e941bb525"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = getStorage();

export {db , auth};

// ログイン・サインアップ認証
export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password){
  return signInWithEmailAndPassword(auth, email, password)
}


// ログイン・サインアップ認証　END


// カスタムフック
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub;
  },[])

  return currentUser;
  }
// カスタムフック　END


// アカウント写真登録
export async function upload(file, currentUser){
  const fileRef = ref(storage, currentUser.uid + '.png');

  // setLoading(true);
  const snapshot = await uploadBytes(fileRef, file)
  const photoURL = await getDownloadURL(fileRef)

  updateProfile(currentUser, {photoURL})

  alert('完了しました！!')

}
// アカウント写真登録　END
