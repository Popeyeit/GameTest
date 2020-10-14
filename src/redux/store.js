import { configureStore } from '@reduxjs/toolkit'
import questions from './reducer'

const store = configureStore({
  reducer: {
    questions,
  },
})
export default store
