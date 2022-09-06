// libraries
import { createSlice } from '@reduxjs/toolkit'

interface authState {
  token : string
}

const initialState: authState = {
  token : ""
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken : ( state : authState, {payload} ) => {
        return {
            ...state,
            token : payload
        }
    }
  },
})

export const { setToken } = authSlice.actions

export default authSlice.reducer