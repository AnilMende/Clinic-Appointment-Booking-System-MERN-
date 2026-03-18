
import React from "react";

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Toaster position="top-center" reverseOrder={false}/>
    </div>
  )
}

export default App;
