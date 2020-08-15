// @flow
export type TUser = {
    name: string,
    id: number,
}
export type TGetUsers = {type: 'GET_USERS', payload: TUser[]};

export type TMainState = {
    users: TUser[],
}
const initialState = {
    users: [],
};
type TAction = TGetUsers;
export const mainReducer = (state: TMainState = initialState, { type, payload }: TAction) => {
    const reducer = {
        GET_USERS: () => ({
            ...state,
            users: payload,
        }),
    };
    if (reducer[type]) {
        return reducer[type]();
    }
    return state;
};
