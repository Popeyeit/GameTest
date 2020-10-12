import React from 'react'
import style from './QuestionItem.module.css'

const QuestionItem = () => {
  const letter = 'a'

  return (
    <>
      <button type="button" className={style.question__btn}>
        <span
          className={`${style['question__btn-text']}  ${
            style['question__btn-text--option']
          } ${style[`question__btn-text--option-${letter}`]}`}
        >
          Item
        </span>
      </button>
      <button type="button" className={style.question__btn}>
        <span className={style['question__btn-text']}>Item</span>
      </button>
      <button type="button" className={style.question__btn}>
        <span className={style['question__btn-text']}>Item</span>
      </button>
      <button type="button" className={style.question__btn}>
        <span className={style['question__btn-text']}>Item</span>
      </button>
    </>
  )
}

export default QuestionItem
