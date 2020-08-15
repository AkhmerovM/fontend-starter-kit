// @flow
import { MainApi } from 'modules/main/service/main-api';

const baseUrl = '/';
export const extraArgs = {
    mainApi: new MainApi(baseUrl),
};

export type TThunkExtraArgs = typeof extraArgs;
