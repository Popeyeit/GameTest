import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import style from './ModalWrapper.module.css'

const ModalWrapper = ({ children, modalIsOpen, modalToggler }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={modalToggler}
      ariaHideApp={false}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <button
        type="button"
        onClick={modalToggler}
        className={style['btn__close-modal']}
      />
      {children}
    </Modal>
  )
}
ModalWrapper.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  modalToggler: PropTypes.func.isRequired,
  children: PropTypes.symbol.isRequired,
}
export default ModalWrapper
