import { createSlice } from '@reduxjs/toolkit'
import { questionsThunk } from '@/src/store/question/questionThunk'
import { IQuestions } from '@/src/api/models/questions'

interface ThemeInitialState {
  list: IQuestions[] | null,
  loading: boolean
}

const initialState: ThemeInitialState = {
  list: null,
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
          state.list = action.payload
          state.loading = false
        })
  },
})

export const {} = questionSlice.actions
export const questionReducer = questionSlice.reducer
