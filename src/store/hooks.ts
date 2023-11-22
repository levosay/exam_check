import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector
export const userStore = (state: RootState) => state.user
export const themeStore = (state: RootState) => state.theme
export const questionStore = (state: RootState) => state.question
