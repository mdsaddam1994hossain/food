import { configureStore } from '@reduxjs/toolkit'
import appSlice from './reducer/appslice'
import userslice from './reducer/userslice'


const store = configureStore({
  reducer: {
    app: appSlice,
    user:userslice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>