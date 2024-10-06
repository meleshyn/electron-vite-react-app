import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from './components/NavBar'
import Register from './pages/Register'
import Login from './pages/Login'
import User from './pages/User'

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<h1 className="text-center mt-4">Welcome to the App</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
