import React, { ChangeEvent, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, User, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
// import { User } from "../types/User";
//ログイン状態の管理にはコンテキストが必要
//ログインページの内容
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export const Login: React.FC = () => {

  const [user, setUser] = useState<User|null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const signIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {

    })
    .catch((err) => console.error(err));
  };

  // //ダミーデータ
  // const dammyData: User = {
  //   id: 30,
  //   name: "taro",
  //   password: "password",
  //   grade: 2,
  // };

  
  // //ログインボタンが押された時
  // const onClickLogin = (name: string, password: string) => {
  //   if (name === dammyData.name) {
  //     if (password === dammyData.name) {
        
  //     }
  //   }
  // };
  // const [name, setName] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
  //   setName(e.target.value);
  // const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
  //   setPassword(e.target.value);

  if (user) {
    return <Navigate to={`/page1`} />;
  }

  return (
    <div>サークルの人に簡単に相談できるSNSへようこそ！
      {/* <h1>Login page</h1>
      <p>input your username</p>
      <input
        type="text"
        value={name}
        placeholder="username"
        onChange={onChangeName}
      />
      <p>input your password</p>
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={onChangePassword}
      /> */}
      <p>
        <button onClick={() => signIn()}>Login</button>
      </p>
    </div>
  );
};
