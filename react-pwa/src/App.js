import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Users from "./pages/users";
import React from "react";
// import firebase from "./firebase";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  // video 14
  // React.useEffect(()=>{
  //   const msg = firebase.messaging()
  //   msg.requestPermission().then(()=>{
  //     return msg.getToken()
  //   }).then((data)=>{
  //     console.log("token",data)
  //   })
  // })

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/router/" element={<Home />} />
        <Route path="/router/users" element={<Users />} />
        <Route path="/router/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
