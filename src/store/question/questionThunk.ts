import { createAsyncThunk } from '@reduxjs/toolkit'
import { getQuestions } from '@/src/api/endpoints'

export const questionsThunk = createAsyncThunk(
  'question/getQuestions',
  async (id: string) => {
    return await getQuestions(id)
  },
)
