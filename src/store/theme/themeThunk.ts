import { createAsyncThunk } from '@reduxjs/toolkit'
import { getQuestionTopic } from '@/src/api/endpoints'

export const themeThunk = createAsyncThunk(
  'theme/questionTopic',
  async () => {
    return await getQuestionTopic()
  },
)
