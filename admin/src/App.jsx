
import React from "react";
import Dashboard from "./pages/Dashboard.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  return(
    <div>
      <Dashboard/>
      <Toaster position="top-center"/>
    </div>
  )
}

export default App
