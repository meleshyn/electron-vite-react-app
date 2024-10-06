// src/renderer/src/pages/Home.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome to the App</h1>

        <p className="text-lg text-gray-700 mb-6">
          This is a simple Full Stack application where you can:
        </p>

        <ul className="text-left mb-8 list-disc list-inside text-gray-600">
          <li>Register as a new user</li>
          <li>Log in with your credentials</li>
          <li>Access your personal dashboard</li>
          <li>View and update your user information</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Use the navigation links to get started. If you're new here, register an account, or if
          you're already registered, log in and access your dashboard.
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          <Link
            to="/register"
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-600 transition"
          >
            Login
          </Link>
        </div>

        <div className="border-t border-gray-300 pt-6 mt-6">
          <p className="text-gray-600 mb-4">
            Please note that you need to run the back-end API separately for this application to
            work.
          </p>

          <a
            href="https://github.com/meleshyn/nestjs-jwt-sequelize-app"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-50 hover:bg-gray-100 border rounded-lg shadow-md p-4 text-left transition"
          >
            <div className="flex items-center space-x-4">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub logo"
                className="w-12 h-12"
              />
              <div>
                <p className="text-lg font-semibold text-blue-600">nestjs-jwt-sequelize-app</p>
                <p className="text-sm text-gray-500">
                  Visit the GitHub repository to get the back-end API.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
