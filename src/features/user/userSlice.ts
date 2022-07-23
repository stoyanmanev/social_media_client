import { createSlice } from '@reduxjs/toolkit'
import type { AppState} from '../../app/store'

export interface UserState {
  value: object
  status: 'idle' | 'loading' | 'failed'
}

const initialState: UserState = {
  value: {},
  status: 'idle',
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, data) => {
      state.value = data.payload
    }
  },
})

export const { setUser } = userSlice.actions

export const selectUser = (state: AppState) => state.user.value

export default userSlice.reducer
