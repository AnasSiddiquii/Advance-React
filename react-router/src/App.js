import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
// import Protected from "./components/Protected";
import Filter from "./components/Filter";

import Company from "./components/Company";
import Channel from "./components/Channel";
import Other from "./components/Other";
// import User from "./components/User";
// import PNF from "./components/PNF";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path="/home" element={<Protected Component={Home} />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>

          <Route path="/filter" element={<Filter />} />

          {/* <Route path="/user/:name" element={<User />} /> */}
          {/* <Route path="/*" element={<PNF />} /> */}

          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
