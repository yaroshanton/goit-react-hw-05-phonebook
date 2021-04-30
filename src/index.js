import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './components/App';
import store from './redux/store'
import './base.css';

ReactDOM.render(
    <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
            < App />
        </PersistGate>
    </Provider >,
    document.querySelector('#root')
);