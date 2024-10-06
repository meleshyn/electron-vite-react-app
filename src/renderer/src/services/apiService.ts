declare global {
  interface Window {
    api: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      apiRequest: (url: string, method: string, data?: any, headers?: any) => Promise<any>
    }
  }
}

// Define the structure of user data used in requests
export interface User {
  name: string
  email: string
  phone?: string
  password: string
}

// Define the structure of login credentials
export interface LoginCredentials {
  email: string
  password: string
}

// Define the structure of the response for login and register (includes the JWT token)
export interface AuthResponse {
  access_token: string
}

// Define the structure of the response for fetching user data
export interface UserResponse {
  name: string
  email: string
  phone: string
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// Function to register a user
export const registerUser = async (userData: User): Promise<AuthResponse> => {
  const response = await window.api.apiRequest(`${API_BASE_URL}/register`, 'POST', userData)
  if (response.error) {
    throw new Error(response.error)
  }
  localStorage.setItem('token', response.access_token) // Store JWT token
  return response
}

// Function to log in a user
export const loginUser = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await window.api.apiRequest(`${API_BASE_URL}/login`, 'POST', credentials)
  if (response.error) {
    throw new Error(response.error)
  }
  localStorage.setItem('token', response.access_token) // Store JWT token
  return response
}

// Function to log out the user
export const logoutUser = (): void => {
  localStorage.removeItem('token') // Remove the JWT token from localStorage
}

// Function to fetch user data (requires authentication)
export const getUserData = async (): Promise<UserResponse> => {
  const token = localStorage.getItem('token')
  if (!token) {
    throw new Error('No token found, user is not authenticated')
  }

  const headers = { Authorization: `Bearer ${token}` }
  const response = await window.api.apiRequest(`${API_BASE_URL}/user`, 'GET', null, headers)
  if (response.error) {
    throw new Error(response.error)
  }
  return response
}
