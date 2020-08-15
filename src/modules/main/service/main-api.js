// @flow
import type { TResponse } from 'app/types';
import { BaseApi } from './index';

export class MainApi extends BaseApi {
    async getUsers<T>(): TResponse<T> {
        return this.request<T>({ method: 'GET', url: '/users.json', headers: { dataType: 'json' } });
    }
}
