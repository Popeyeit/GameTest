import React from 'react'
import style from './GamePage.module.css'
import QuestionItem from '../../components/QuestionItem/QuestionItem'

const GamePage = () => {
  return (
    <section className={style.game}>
      <div className={style.game__wrapper} />
      <button type="button" className={style.game__btn} />
      <p className={style['game__text-question']} />
      <div className={style['game__questions - wrapper']}>
        <QuestionItem />
      </div>
    </section>
  )
}

export default GamePage
