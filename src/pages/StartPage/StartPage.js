import React from "react"
import style from "./StartPage.module.css"

const StartPage = () => {
  return (
    <section className={style.welcome}>
      <div className={style.welcome__wrapper}>
        <h1 className={style.welcome__title}>Who wants to be a millionaire?</h1>
        <button type="button" className={style.welcome__btn}>
          Start
        </button>
      </div>
    </section>
  )
}

export default StartPage
