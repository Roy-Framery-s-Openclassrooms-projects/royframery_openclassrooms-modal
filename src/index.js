import React, { useState } from 'react'
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
    buttonText,
    buttonStyle,
    content,
    isOpen,
    afterCloseModal,
    BeforeOpenModal,
    wrapperStyle,
    modalStyle,
    contentStyle,
    CloseButtonStyle,
    iconStyle,
    iconSrc
}) => {
    const [isShow, setShow] = useState(isOpen)

    const handleModal = () => {
        if (isShow === true) {
            setShow(false)
            // If "afterCloseModal" is defined, then a behavior can be added after closing the modal
            if (afterCloseModal) {
                afterCloseModal()
            }
        } else {
            // If "BeforeOpenModal" is defined, then a behavior can be added before opening the modal the modal
            if (BeforeOpenModal) {
                if (BeforeOpenModal()) {
                    BeforeOpenModal()
                    return setShow(true)
                } else {
                    return setShow(false)
                }
            } else {
                return setShow(true)
            }
        }
    }

    return (
        <div>
            <button
                style={buttonStyle}
                className={styles.mainButton}
                onClick={handleModal}
            >
                {buttonText}
            </button>
            <div
                style={wrapperStyle}
                className={isShow ? styles.modal : styles.hide}
            >
                <div style={modalStyle} className={styles.modal__content}>
                    <div style={contentStyle}>{content}</div>
                    <button
                        style={CloseButtonStyle}
                        className={styles.modal__button}
                        onClick={handleModal}
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
        </div>
    )
}

Modal.defaultProps = {
    buttonText: 'Magic ✨',
    content: `I'm a Super Modal 🚀`,
    isOpen: false
}

Modal.propTypes = {
    buttonText: PropTypes.string,
    buttonStyle: PropTypes.object,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
        PropTypes.element
    ]),
    isOpen: PropTypes.bool,
    afterCloseModal: PropTypes.func,
    beforeOpenModal: PropTypes.func,
    wrapperStyle: PropTypes.object,
    modalStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    CloseButtonStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    iconSrc: PropTypes.string
}
