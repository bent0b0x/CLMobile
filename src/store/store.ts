import { configureStore } from '@reduxjs/toolkit'
import auth from '../auth/slices/authSlice'

export const store = configureStore({
  reducer: { auth }
})
