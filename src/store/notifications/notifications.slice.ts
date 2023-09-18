import { INotification } from '@/types/INotification.ts'
import { createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

interface NotificationsState {
  notifications: INotification[]
}

const initialState: NotificationsState = {
  notifications: []
}

export const NotificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    newNotification: (state, {payload: note}): void => {
      state.notifications.push({
        id: v4(),
        ...note
      })
    },
    deleteNotification: (state, {payload: id}): void => {
      state.notifications = state.notifications.filter(note => note.id !== id)
    }
  }
})

export const {reducer: notificationsReducer, actions: notificationsActions} = NotificationsSlice