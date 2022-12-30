import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App1 from './App1';
// import App2 from './App2';
// import App3 from './App3';
// import App4 from './App4';
// import App5 from './App5';
// import App6 from './App6';
import App7 from './App7';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App1 /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    {/* <App4 /> */}
    {/* <App5 /> */}
    {/* <BrowserRouter> <App6 /> </BrowserRouter> */}
    <BrowserRouter> <App7 /> </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
