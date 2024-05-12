import { createSlice } from '@reduxjs/toolkit'
import { questionsThunk } from '@/src/store/question/questionThunk'
import { GetQuestionsRequest } from '@/src/api/endpoints'

interface ThemeInitialState {
  data: GetQuestionsRequest | null,
  loading: boolean
}

const initialState: ThemeInitialState = {
  data: null,
  loading: true,
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(questionsThunk.pending,
        (state) => {
          state.loading = true
        })
      .addCase(questionsThunk.fulfilled,
        (state, action) => {
          state.data = action.payload
          state.loading = false
        })
  },
})

export const {} = questionSlice.actions
export const questionReducer = questionSlice.reducer
