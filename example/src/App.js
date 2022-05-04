import React, { useState } from 'react'
// css
import './App.css'

import { Modal } from '@royframery_openclassrooms/modal'
import '@royframery_openclassrooms/modal/dist/index.css'

const App = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const afterOpenModal = () => {
        console.log('Boo 👻')
    }
    const afterCloseModal = () => {
        console.log('Good Bye Modal... 😿 ')
        setIsOpen(false)
    }

    return (
        <main className='main'>
            <button className='main__button' onClick={openModal}>
                Save
            </button>
            <Modal
                content={"I'm a new content ! 💃"}
                isOpen={isOpen}
                afterOpenModal={afterOpenModal}
                afterCloseModal={afterCloseModal}
                wrapperStyle={{ backgroundColor: 'rgba(255, 127, 0, 0.3)' }}
                modalStyle={{ width: '50%', borderRadius: '10px' }}
                contentStyle={{ color: '#ff7f00' }}
                closeButtonStyle={{
                    backgroundColor: '#ff7f00',
                    top: '-20px',
                    right: '-20px',
                    borderRadius: '50%'
                }}
                iconStyle={{ width: '30px', height: '30px' }}
                iconSrc='/cactus.svg'
            />
        </main>
    )
}

export default App
