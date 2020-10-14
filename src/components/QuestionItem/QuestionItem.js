import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  currentIdxAction,
  resetCurrentIdx,
  changeScore,
  fiftyHelp,
} from '../../redux/actions'
import style from './QuestionItem.module.css'

const QuestionItem = ({ letter, answer }) => {
  const { items } = useSelector(state => state.questions)
  const { currentIdx } = useSelector(state => state.questions)
  const { fiftyHelper } = useSelector(state => state.questions)
  const dispatch = useDispatch()
  const history = useHistory()
  const correctBtn = document.querySelector(`.${style.selected__correct}`)
  const selectedBtn = document.querySelector(`.${style.selected__option}`)

  if (correctBtn) {
    correctBtn.classList.remove(style.selected__correct)
  }
  if (selectedBtn) {
    selectedBtn.classList.remove(style.selected__option)
  }

  const handleAnswer = ({ target }) => {
    const [isCorrect] = Object.values(answer)
    target.classList.toggle(style.selected__option)
    if (isCorrect) {
      setTimeout(() => {
        target.classList.toggle(style.selected__correct)
        setTimeout(() => {
          dispatch(changeScore(items[currentIdx].prise))
          if (fiftyHelper === 1) {
            dispatch(fiftyHelp())
          }
          if (currentIdx >= items.length - 1) {
            history.replace('game/total')
          }
          dispatch(currentIdxAction())
        }, 2500)
      }, 1500)
      return
    }
    setTimeout(() => {
      target.classList.toggle(style.selected__wrong)
      setTimeout(() => {
        dispatch(resetCurrentIdx())
        history.replace('/game/total')
      }, 1000)
    }, 1500)
  }

  return (
    <>
      <button
        type="button"
        className={style.question__btn}
        onClick={handleAnswer}
      >
        <span
          className={`${style['question__btn-text']}  ${
            style['question__btn-text--option']
          } ${style[`question__btn-text--option-${letter}`]}`}
        >
          {Object.keys(answer)}
        </span>
      </button>
    </>
  )
}
QuestionItem.propTypes = {
  letter: PropTypes.string,
  answer: PropTypes.bool,
}.isRequired
export default QuestionItem
