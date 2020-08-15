import { mainReducer } from 'modules/main/reducers';
import { combineReducers } from 'redux';
import { MAIN_MODULE_NAME } from 'modules/main/constants';

export const rootReducer = combineReducers({
    [MAIN_MODULE_NAME]: mainReducer,
});
