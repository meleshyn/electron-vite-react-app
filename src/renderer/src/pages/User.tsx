import React, { useEffect, useState } from 'react'
import { getUserData, logoutUser } from '../services/apiService'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// Define the structure of the user data
interface User {
  name: string
  email: string
  phone: string
}

const User: React.FC = () => {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch the user data when the component is mounted
    const fetchUserData = async () => {
      try {
        const userData = await getUserData()
        setUser(userData)
      } catch (error) {
        toast.error('Failed to fetch user data.')
        navigate('/login') // Redirect to login page if fetching user data fails
      }
    }

    fetchUserData()
  }, [navigate])

  const handleLogout = () => {
    logoutUser() // Clear the token from localStorage
    toast.success('Logged out successfully.')
    navigate('/login') // Redirect to login page
  }

  if (!user) {
    return <div className="container mx-auto p-4">Loading user data...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="mb-4">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>
      <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-md">
        Logout
      </button>
    </div>
  )
}

export default User
