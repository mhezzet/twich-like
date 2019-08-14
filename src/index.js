import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { StoreProvider } from 'easy-peasy'
import 'semantic-ui-css/semantic.css'
import store from './store'

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
)
