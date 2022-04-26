import React, { useState } from 'react'
// css
import './App.css'

import { Modal } from '@royframery_openclassrooms/modal'
import '@royframery_openclassrooms/modal/dist/index.css'

const App = () => {
    const [isModal, setModal] = useState(false)

    const showModal = () => {
        setModal(true)
    }
    const resetIsModal = () => {
        setModal(false)
    }
    return (
        <main className='main'>
            <div className='form'>
                <button onClick={() => showModal()}>Save</button>
            </div>
            <Modal
                text='Employee Created !'
                show={isModal}
                callBack={resetIsModal}
            />
        </main>
    )
}

export default App
