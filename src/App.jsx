// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { MainContainer } from './modules/main/containers/MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
    return (
        <Provider store={store}><MainContainer /></Provider>
    );
}
