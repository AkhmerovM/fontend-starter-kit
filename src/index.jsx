import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App';
import './style/index.less';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root element not found');
}
ReactDom.render(<App />, root);
