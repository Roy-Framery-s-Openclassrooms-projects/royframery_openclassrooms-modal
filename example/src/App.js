import React from 'react'
// css
import './App.css'

import { Modal } from '@royframery_openclassrooms/modal'
import '@royframery_openclassrooms/modal/dist/index.css'

// const Content = () => {
//     return (
//         <>
//             <p>You are a super Modal</p> <p>And you deserve it !</p>
//         </>
//     )
// }

const App = () => {
    // const displayAfterClose = () => {
    //     console.log('The modal is now close')
    // }
    // const displayBeforeToOpen = () => {
    //     return true
    // }

    return (
        <main className='main'>
            <Modal
            // buttonText='Save'
            // isOpen={false}
            // afterCloseModal={displayAfterClose}
            // BeforeOpenModal={displayBeforeToOpen}
            // CloseButtonStyle={{ left: '-12px', right: 'unset' }}
            />
        </main>
    )
}

export default App
