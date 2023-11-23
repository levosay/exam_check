import { createSlice } from '@reduxjs/toolkit'
import { IUser } from 'api/models'
import { meThunk } from 'store/user'

interface UserInitialState {
  user: IUser | null,
  loading: boolean
}

const initialState: UserInitialState = {
  user: null,
  loading: true,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(meThunk.pending, (
      state,
    ) => {
      state.loading = true
    })
      .addCase(meThunk.fulfilled, (
        state,
        action,
      ) => {
        state.user = action.payload
        state.loading = false
      })
      .addCase(meThunk.rejected, (state) => {
        state.loading = false
      })
  },
})

export const { clearUser } = userSlice.actions
export const userReducer = userSlice.reducer
