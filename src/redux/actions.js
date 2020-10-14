import { createAction } from '@reduxjs/toolkit'

export const currentIdxAction = createAction('questions/changeCurrentIdx')
export const getQuestions = createAction('questions/getQuestions')
export const resetCurrentIdx = createAction('questions/resetCurrentIdx')
export const changeScore = createAction('questions/changeScore')
export const resetScore = createAction('questions/resetScore')
export const fiftyHelp = createAction('questions/useHelp')
export const resetFiftyHelp = createAction('questions/resetFiftyHelp')
