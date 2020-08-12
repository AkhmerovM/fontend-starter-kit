import React from 'react';
import ReactDom from 'react-dom';
import {App} from "./App";

const root = document.getElementById('root');

if(!root) {
    throw new Error('root element not found');
}
ReactDom.render(<App />, root);
