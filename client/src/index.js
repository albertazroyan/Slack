import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/store/store';
import axios from "axios";


axios.defaults.baseURL = 'http://localhost:8000/';
const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

