import React from 'react'
import { useHistory } from 'react-router-dom'
import style from './StartPage.module.css'

const StartPage = () => {
  const history = useHistory()
  const handleChangeRoute = () => {
    history.push('/game')
  }
  return (
    <section className={style.welcome}>
      <div className={style.welcome__wrapper}>
        <div className={style['welcome__title-wrapper']}>
          <h1 className={style.welcome__title}>
            Who wants to be a millionaire?
          </h1>
          <button
            type="button"
            onClick={handleChangeRoute}
            className={style.welcome__btn}
          >
            Start
          </button>
        </div>
      </div>
    </section>
  )
}

export default StartPage
