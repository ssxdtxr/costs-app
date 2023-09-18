import { INotification } from '@/types/INotification.ts'
import { createSlice } from '@reduxjs/toolkit'

interface NotificationsState {
  notifications: INotification[]
}

const initialState: NotificationsState = {
  notifications: []
}

export const NotificationsSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    newNotification: (state, {payload: note}) => {
      state.notifications.push(note)
    },
  }
})

export const {reducer: notificationsReducer, actions: notificationsActions} = NotificationsSlice