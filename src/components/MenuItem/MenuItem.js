import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import style from './MenuItem.module.css'

const MenuItem = ({ el, idx }) => {
  const { currentIdx } = useSelector(state => state.questions)
  const { items } = useSelector(state => state.questions)

  return (
    <li
      className={`${
        currentIdx === items.length - 1 - idx
          ? `${style['menu__list-item']} ${style.active}`
          : `${style['menu__list-item']}`
      }`}
    >
      <span
        className={`${
          currentIdx > items.length - 1 - idx
            ? `${style['menu__list-item-text--last']}`
            : `${style['menu__list-item-text']}`
        }`}
      >
        $ {el.prise}
      </span>
    </li>
  )
}
MenuItem.propTypes = {
  el: PropTypes.shape({
    prise: PropTypes.number,
  }).isRequired,
  idx: PropTypes.number.isRequired,
}
export default MenuItem
