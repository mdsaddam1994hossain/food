import { configureStore } from '@reduxjs/toolkit'
import appSlice from './reducer/appslice'


const store = configureStore({
  reducer: {
    app: appSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>