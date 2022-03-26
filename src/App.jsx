import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Exemplo } from "./pages/Exemplo";

function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user/:user" element={<Profile/>}/>
          <Route path="/exemplo" element={<Exemplo/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
