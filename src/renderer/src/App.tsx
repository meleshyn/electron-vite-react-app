import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from './components/NavBar'

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<h1 className="text-center mt-4">Welcome to the App</h1>} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
