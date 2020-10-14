import { createReducer, combineReducers } from '@reduxjs/toolkit'
import {
  currentIdxAction,
  getQuestions,
  resetCurrentIdx,
  changeScore,
  resetScore,
  fiftyHelp,
} from './actions'
import questionsItems from '../questions.json'

const currentIdx = createReducer(0, {
  [currentIdxAction]: state => state + 1,
  [resetCurrentIdx]: () => 0,
})
const items = createReducer(questionsItems, {
  [getQuestions]: state => state,
})
const score = createReducer(0, {
  [changeScore]: (_, { payload }) => payload,
  [resetScore]: () => 0,
})
const fiftyHelper = createReducer(0, {
  [fiftyHelp]: state => state + 1,
})
export default combineReducers({
  currentIdx,
  items,
  score,
  fiftyHelper,
})
