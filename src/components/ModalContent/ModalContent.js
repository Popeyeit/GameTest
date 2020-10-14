import React from 'react'
import style from './ModalContent.module.css'

const ModalContent = () => {
  const getRandomNum = () => {
    let min = 1
    let max = 4
    let one = 0
    let two = 0
    let three = 0
    let four = 0
    for (let i = 0; i < 100; i += 1) {
      min = Math.ceil(min)
      max = Math.floor(max)
      const res = Math.floor(Math.random() * (max - min + 1)) + min
      if (res === 1) {
        one += 1
      }
      if (res === 2) {
        two += 1
      }
      if (res === 3) {
        three += 1
      }
      if (res === 4) {
        four += 1
      }
    }
    return [
      {
        id: 1,
        num: one,
      },
      {
        id: 2,
        num: two,
      },
      {
        id: 3,
        num: three,
      },
      { id: 4, num: four },
    ]
  }

  return (
    <div className={style['modal-wrapper']}>
      {getRandomNum().map(el => (
        <div className={style.modal__item} key={el.id}>
          {el.num}%
        </div>
      ))}
    </div>
  )
}

export default ModalContent
