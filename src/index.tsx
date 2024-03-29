import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import App from "./App";
import { Login } from "./pages/login";
import { SignUp } from "./pages/sign-up";
import { ClubList } from "./pages/club-list";
import { Club1 } from "./pages/club1";
import { Page404 } from "./pages/page404";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sns/login" element={<Login />} />
      <Route path="/sns/sign-up" element={<SignUp />} />
      <Route path="/sns/club-list" element={<ClubList />} />
      <Route path="/sns/club-list/club1" element={<Club1 />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/sns/" element={<Login />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();