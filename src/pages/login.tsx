import React, { ChangeEvent, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  User,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import classes from "../css modules/login.module.scss";
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
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((err) => console.error(err));
  };

  if (user) {
    return <Navigate to={`/sns/club-list`} />;
  }

  return (
    <>
      <body className={classes.body}>
        <div>気になるサークルの人と簡単に交流できるSNSへようこそ！</div>
        <div>
          <a className={classes.btnEmergencyReal} onClick={() => signIn()}>
            <span className={classes.btnEmergencyRealBottom}></span>
            <span className={classes.btnEmergencyRealTop}>
              <span>押す</span>
            </span>
          </a>
        </div>
      </body>
    </>
  );
};
