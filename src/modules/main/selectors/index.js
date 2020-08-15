// @flow
import type { TRootState } from 'app/types';
import type { TMainState, TUser } from 'modules/main/reducers';
import { MAIN_MODULE_NAME } from 'modules/main/constants';

function selectMainModule(state: TRootState): TMainState {
    return state[MAIN_MODULE_NAME];
}
export function selectMainUsers(state: TRootState): TUser[] {
    return selectMainModule(state).users;
}
