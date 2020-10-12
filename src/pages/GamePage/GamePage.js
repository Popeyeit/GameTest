import React from 'react'
import style from './GamePage.module.css'
import QuestionItem from '../../components/QuestionItem/QuestionItem'

const GamePage = () => {
  return (
    <section className={style.game}>
      <button type="button" className={style.game__btn} />
      <div className={style.game__wrapper}>
        <p className={style['game__text-question']}>
          How old your elder brother was 10 years before you was born, mate?
        </p>
        <div className={style['game__questions-wrapper']}>
          <QuestionItem />
        </div>
      </div>
    </section>
  )
}

export default GamePage
