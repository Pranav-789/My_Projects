import { configureStore } from '@reduxjs/toolkit'
import { pasteSlice } from './redux/pasteSlice'
import pasteReducer from '../src/redux/pasteSlice'

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
})