
import React from "react";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />


      </Routes>

      <Toaster position="top-center" />
    </div>
  )
}

export default App
