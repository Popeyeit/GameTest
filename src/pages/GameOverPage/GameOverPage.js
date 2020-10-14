import React from 'react'

import Greet from '../../components/Greet/Greet'

import style from './GameOverPage.module.css'

const GameOverPage = () => {
  return (
    <section className={style.total}>
      <Greet IsGameOver valueBtn="Try again" />
    </section>
  )
}

export default GameOverPage
