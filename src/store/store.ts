import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { notificationsReducer } from '@/store/notifications/notifications.slice.ts'

const reducers = combineReducers({
  notifications: notificationsReducer
})

export const store = configureStore({
  reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
