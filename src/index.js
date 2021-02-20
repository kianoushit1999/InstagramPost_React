import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

let jsx = (
    <div>
        <App></App>
    </div>
)

ReactDom.render(
    jsx,
    document.getElementById('root')
)
