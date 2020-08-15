// @flow
import { applyMiddleware, createStore, compose } from 'redux';
import type { TRootState } from 'app/types';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer';
import { extraArgs } from './extra-args';

const initialState: TRootState = {};
export const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk.withExtraArgument(extraArgs)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
