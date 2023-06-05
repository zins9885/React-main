import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 01. useState를 사용하는 이유 및 개념 (+리액트 이벤트)
//import App from './Ex01'; 여기 건들어줘

// 02. use State 예제 -좋아요 실습
// import App from './Ex02'

// 03. random값 맞추기 실습
// import App from './Ex03'

// 04. useState 실습2 - 주사위게임
import App from './Ex04'



import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
