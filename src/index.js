import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import cross from 'close.png'

export const Modal = ({ text, show, callBack }) => {
    const [isShow, setShow] = useState()
    const hideModal = () => {
        setShow(false)
        callBack()
    }
    useEffect(() => {
        setShow(show)
    }, [show])

    return (
        <div className={isShow ? styles.modal : styles.hide}>
            <div className={styles.modal__content}>
                <div>{text}</div>
                <button className={styles.modal__button} onClick={hideModal}>
                    <img
                        className={styles.modal__img}
                        src={cross}
                        alt='close button'
                    />
                </button>
            </div>
        </div>
    )
}
