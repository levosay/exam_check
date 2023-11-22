import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import { userReducer } from './user'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { themeReducer } from '@/src/store/theme'
import { questionReducer } from '@/src/store/question'

const combinedReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  question: questionReducer,
})

const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction,
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      theme: action.payload.theme,
      question: action.payload.question,
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = () =>
  configureStore({
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
    reducer,
  })

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const wrapper = createWrapper(makeStore, { debug: false })
