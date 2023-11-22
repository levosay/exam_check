import { createAsyncThunk } from '@reduxjs/toolkit'
import { questionTopic } from '@/src/api/endpoints'

export const themeThunk = createAsyncThunk(
  'theme/questionTopic',
  async () => {
    return await questionTopic()
  },
)
