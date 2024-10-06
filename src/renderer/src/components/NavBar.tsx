import React from 'react'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
