import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import style from './Greet.module.css'

const Greet = ({ valueBtn, IsGameOver }) => {
  const history = useHistory()
  const { score } = useSelector(state => state.questions)
  const handleChangeRoute = () => {
    history.push(`/game`)
  }
  return (
    <div className={style.welcome__wrapper}>
      <div className={style['welcome__title-wrapper']}>
        {IsGameOver ? (
          <div className={style.total__wrapper}>
            <p className={style.total}>Total score:</p>
            <p className={style.total__earned}>${score} earned</p>
          </div>
        ) : (
          <h1 className={style.welcome__title}>
            Who wants to be a millionaire?
          </h1>
        )}
        <button
          type="button"
          onClick={handleChangeRoute}
          className={style.welcome__btn}
        >
          {valueBtn}
        </button>
      </div>
    </div>
  )
}
Greet.propTypes = {
  valueBtn: PropTypes.string,
  IsGameOver: PropTypes.bool,
}.isRequired

export default Greet
