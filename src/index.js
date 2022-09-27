import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'the-new-css-reset/css/reset.css'
import './styles/base.css'
import './styles/cpc-shared.css'
import './styles/concierge.css'
//import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals()
