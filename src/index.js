import React from 'react'
import { render } from 'react-dom'
import App from './app'
import './styles/index.css'

const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
)
