// @flow
import type { TGetUsers, TUser } from 'modules/main/reducers';
import type {
    TDispatch, TGetState, TResponse, TThunkAction,
} from 'app/types';
import type { TThunkExtraArgs } from 'app/store/extra-args';

const actionGetUsers = (data: TUser[]): TGetUsers => ({
    type: 'GET_USERS',
    payload: data,
});
export function getUsers(): TThunkAction<TResponse<null>> {
    return async (dispatch: TDispatch, getState: TGetState, { mainApi }: TThunkExtraArgs) => {
        const response = await mainApi.getUsers<TUser[]>();
        if (response.success) {
            dispatch(actionGetUsers(response.data));
        }
        return { data: null, success: true };
    };
}
