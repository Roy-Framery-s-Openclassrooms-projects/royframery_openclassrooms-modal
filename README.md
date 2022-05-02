# @royframery_openclassrooms/modal

> package to handle a modal

[![NPM](https://img.shields.io/npm/v/@royframery_openclassrooms/modal.svg)](https://www.npmjs.com/package/@royframery_openclassrooms/modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @royframery_openclassrooms/modal
```

## Usage
---
```jsx
import React from 'react'

import Modal from '@royframery_openclassrooms/modal'
import '@royframery_openclassrooms/modal/dist/index.css'

const App = () => {
  return (
    <div className="app" >
        <Modal buttonText="I'm a button" />
    </div>
  )
}
```

## Props
---
Common props you may want to specify include:

- ```buttonText```: The text of the main button.
- ```buttonStyle``` : The style of the main button which is a button element. [React inline Style](https://reactjs.org/docs/dom-elements.html#style).
  - Format:
  ```jsx
    <Modal buttonStyle={{ width: '70px', color: '#ff7f00' }} />
  ```
- ```content```: The content of the modal. Can be a string, dom elemnt or a React component.
  - Default : `I'm a Super Modal 🚀`
  - Format: 
    ```jsx
    <Modal content={string} />
    <Modal content={<p>dom element </p>} />
    <Modal content={<MyComponent />} />
    ``` 
- ```isOpen```: The default behavior of the modal. 
  - Default : false.
- ```afterCloseModal```: A fonction to execute before opening the modal
- ```BeforeOpenModal```: A fonction to execute after closing the modal
- ```wrapperStyle```: The style of the main wrapper which is a dom element. [React inline Style](https://reactjs.org/docs/dom-elements.html#style)
  - Format:
  ```jsx
    <Modal wrapperStyle={{ width: '70px', color: '#ff7f00' }} />
  ```
- ```modalStyle```: The style of the modal which is a dom element. [React inline Style](https://reactjs.org/docs/dom-elements.html#style)
  - Format:
  ```jsx
    <Modal modalStyle={{ width: '50%', borderRadius: '10px' }} />
  ```
- ```contentStyle```: The style of the content in the modal which is a dom element. [React inline Style](https://reactjs.org/docs/dom-elements.html#style)
  - Format:
  ```jsx
    <Modal contentStyle={{ display: 'flex', backgroundColor: '#ff7f00' }} />
  ```
- ```CloseButtonStyle```: The style of the modal's close button which is a button element. [React inline Style](https://reactjs.org/docs/dom-elements.html#style)
  - Format:
  ```jsx
    <Modal CloseButtonStyle={{ backgroundColor: '#ff7f00', left: "0", right: "unset"}} />
  ```
- ```iconStyle```: The style of the close button's icon which is a img element. [React inline Style](https://reactjs.org/docs/dom-elements.html#style)
  - Format:
  ```jsx
    <Modal iconStyle={{ width: '30px', height: '30px' }} />
  ```
- ```iconSrc```: The src of the icon
  - Format:
  ```jsx
    <Modal iconSrc={'./myImage.png'} />
  ```


## License

MIT © [Yorgamaton](https://github.com/Yorgamaton)
