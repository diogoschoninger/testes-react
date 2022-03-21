import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user" exact></Route>
          <Route path="/user/:user" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
