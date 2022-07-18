import {store} from './redux/redux_store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';
import { StoreContext } from './StoreContext';



export const rerenderEntireTree = () => {
    const state = store.getState()
    const dispatch = store.dispatch.bind(store)
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}