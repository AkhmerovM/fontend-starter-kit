// @flow
import type { TMainState } from 'modules/main/reducers';
import { MAIN_MODULE_NAME } from 'modules/main/constants';
import type { TThunkExtraArgs } from 'app/store/extra-args';

export type TRootState = {
    [typeof MAIN_MODULE_NAME]: TMainState
};
export type TDispatch = (action: {}) => any;
export type TGetState = () => TRootState;
export type TResponseSuccess<T> = {data: T, success: true};
export type TThunkAction<T> = (dispatch: TDispatch, getState: TGetState, extraArgs: TThunkExtraArgs) => T;
export type TResponseError = {
    errors: [],
    success: false
};
export type TResponse<T> = Promise<TResponseSuccess<T> | TResponseError>;
