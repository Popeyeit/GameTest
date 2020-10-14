import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import QuestionItem from '../../components/QuestionItem/QuestionItem'
import Menu from '../../components/Menu/Menu'
import {
  resetCurrentIdx,
  resetScore,
  fiftyHelp,
  resetFiftyHelp,
} from '../../redux/actions'
import style from './GamePage.module.css'

const GamePage = () => {
  const dispatch = useDispatch()
  const questions = useSelector(state => state.questions.items)
  const { currentIdx } = useSelector(state => state.questions)
  const { fiftyHelper } = useSelector(state => state.questions)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  useEffect(() => {
    dispatch(resetScore())
    dispatch(resetCurrentIdx())
    dispatch(resetFiftyHelp())
  }, [dispatch])
  const toggleOpenMenu = () => {
    setIsOpenMenu(state => !state)
  }
  const handleHelp = () => {
    if (fiftyHelper === 0 || fiftyHelper > 1) {
      return questions[currentIdx].answers
    }
    let correct = false
    let unCorrect = false
    const newAnswers = []
    const currentAnswers = questions[currentIdx].answers
    for (let i = 0; i < currentAnswers.length; i += 1) {
      const [value] = Object.values(currentAnswers[i].answer)
      if (value && !correct) {
        correct = true
        newAnswers.push(currentAnswers[i])
      }
      if (!value && !unCorrect) {
        unCorrect = true
        newAnswers.push(currentAnswers[i])
      }
    }
    return newAnswers
  }
  const handleIncrementHelper = () => {
    dispatch(fiftyHelp())
  }

  return (
    <section className={style.game}>
      {questions[currentIdx] && (
        <>
          {fiftyHelper < 2 && (
            <button
              type="button"
              onClick={handleIncrementHelper}
              className={style.help}
            >
              50/50
            </button>
          )}
          <button
            type="button"
            onClick={toggleOpenMenu}
            className={style['game__open-btn']}
          />
          <div className={style.game__wrapper}>
            <p className={style['game__text-question']}>
              {questions[currentIdx].question}
            </p>
            <div className={style['game__questions-wrapper']}>
              {handleHelp().map((el, idx) => (
                <QuestionItem
                  letter={el.letter}
                  answer={el.answer}
                  idx={idx}
                  key={el.id}
                />
              ))}
            </div>
            <Menu isOpenMenu={isOpenMenu} onToggleOpen={toggleOpenMenu} />
          </div>
        </>
      )}
    </section>
  )
}

export default GamePage
