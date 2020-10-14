import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import MenuItem from '../MenuItem/MenuItem'
import style from './Menu.module.css'

const Menu = ({ onToggleOpen, isOpenMenu }) => {
  const prises = useSelector(state => state.questions.items)
  return (
    <div className={`${isOpenMenu ? style['menu--open'] : style.menu}`}>
      <button
        type="button"
        className={style['menu__close-btn']}
        onClick={onToggleOpen}
      />
      <ul className={style.menu__list}>
        {prises.map((el, idx, currentArray) => {
          const correctIdx = currentArray.length - idx - 1
          return (
            <MenuItem
              key={currentArray[correctIdx].id}
              el={currentArray[correctIdx]}
              idx={idx}
            />
          )
        })}
      </ul>
    </div>
  )
}
Menu.propTypes = {
  onToggleOpen: PropTypes.func.isRequired,
  isOpenMenu: PropTypes.bool.isRequired,
}
export default Menu
