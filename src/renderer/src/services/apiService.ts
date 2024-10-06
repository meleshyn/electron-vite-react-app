import axios, { AxiosResponse } from 'axios'

declare global {
  interface Window {
    electronAPI: {
      getToken: () => Promise<string | undefined>
      setToken: (token: string) => void
      clearToken: () => void
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

// Use the API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// Configure Axios instance
const api = axios.create({
  baseURL: API_BASE_URL
})

// Interceptor to add JWT token to the request headers if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Register a new user
export const registerUser = async (userData: User): Promise<AuthResponse> => {
  const response: AxiosResponse<AuthResponse> = await api.post('/register', userData)
  localStorage.setItem('token', response.data.access_token)
  return response.data
}

// Log in an existing user
export const loginUser = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response: AxiosResponse<AuthResponse> = await api.post('/login', credentials)
  localStorage.setItem('token', response.data.access_token)
  return response.data
}

// Log out the user by clearing the token
export const logoutUser = (): void => {
  localStorage.removeItem('token')
}

// Fetch authenticated user data
export const getUserData = async (): Promise<UserResponse> => {
  const response: AxiosResponse<UserResponse> = await api.get('/user')
  return response.data
}
