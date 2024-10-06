import { createSlice } from '@reduxjs/toolkit'

// Define the state shape for authentication
export interface AuthState {
  isAuthenticated: boolean
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('token')
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
      localStorage.removeItem('token') // Clear token from localStorage on logout
    }
  }
})

// Export the actions to be used in components
export const { login, logout } = authSlice.actions

// Export the reducer
export default authSlice.reducer
