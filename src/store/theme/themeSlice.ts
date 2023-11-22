import { createSlice } from '@reduxjs/toolkit'
import { themeThunk } from '@/src/store/theme/themeThunk'
import { TQuestionTopic } from '@/src/api/models'

interface ThemeInitialState {
  list: TQuestionTopic | null,
  loading: boolean
}

const initialState: ThemeInitialState = {
  list: null,
  loading: true,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(themeThunk.pending,
        (state) => {
          state.loading = true
        })
      .addCase(themeThunk.fulfilled,
        (state, action) => {
          state.list = action.payload
          state.loading = false
        })
  },
})

export const {} = themeSlice.actions
export const themeReducer = themeSlice.reducer
