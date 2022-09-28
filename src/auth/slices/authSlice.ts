import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  jwt: string | null
}

const initialState: AuthState = { jwt: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSucceeded(state, action: PayloadAction<{ jwt: string }>) {
      state.jwt = action.payload.jwt
    }
  }
})

export const { loginSucceeded } = authSlice.actions
export default authSlice.reducer
