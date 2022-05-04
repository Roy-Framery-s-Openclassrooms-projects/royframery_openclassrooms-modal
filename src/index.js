import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// Css
import styles from './styles.module.css'
// Icon
import cross from 'close.png'

/**
 *
 * @description Component that show modal and handle behavior
 * @returns { HTMLElement }
 */
export const Modal = ({
    content,
    isOpen,
    afterCloseModal,
    afterOpenModal,
    wrapperStyle,
    modalStyle,
    contentStyle,
    closeButtonStyle,
    iconStyle,
    iconSrc
}) => {
    const [isShow, setShow] = useState()

    if (afterOpenModal && isShow) {
        afterOpenModal()
    }

    const closeModal = () => {
        setShow(false)
        if (afterCloseModal) {
            afterCloseModal()
        }
    }

    useEffect(() => {
        setShow(isOpen)
    }, [isOpen])

    return (
        <div
            style={wrapperStyle}
            className={isShow ? styles.modal : styles.hide}
        >
            <div style={modalStyle} className={styles.modal__content}>
                <div style={contentStyle}>{content}</div>
                <button
                    style={closeButtonStyle}
                    className={styles.modal__button}
                    onClick={closeModal}
                >
                    <img
                        style={iconStyle}
                        className={styles.modal__img}
                        src={iconSrc ? iconSrc : cross}
                        alt='close button'
                    />
                </button>
            </div>
        </div>
    )
}

Modal.defaultProps = {
    content: `I'm a Super Modal 🚀`
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
        PropTypes.element
    ]),
    afterCloseModal: PropTypes.func,
    afterOpenModal: PropTypes.func,
    wrapperStyle: PropTypes.object,
    modalStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    closeButtonStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    iconSrc: PropTypes.string
}
