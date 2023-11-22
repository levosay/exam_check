import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMe } from '@/src/api/endpoints'

export const meThunk = createAsyncThunk(
  'user/getMe',
  async () => {
    return await getMe()
  })
