import { configureStore } from '@reduxjs/toolkit'
import authReducer, { AuthState } from './authSlice'

// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})

// Define types for the RootState and AppDispatch, including AuthState
export type RootState = {
  auth: AuthState
}

export type AppDispatch = typeof store.dispatch
