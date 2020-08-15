// @flow
import type { TResponse } from '../../../app/types';

const axios = require('axios');

type TConfig = {
    method: string,
    url: string,
    headers?: mixed,
    body?: mixed,
    params?: mixed
}
export class BaseApi {
    domain: string;

    constructor(domain: string) {
        this.domain = domain;
    }

    async request<T>({
        method, url, body, params, headers,
    }: TConfig): TResponse<T> {
        const response = await axios({
            baseURL: this.domain,
            method,
            url,
            body,
            params,
            headers,
        });
        if (response.statusText === 'OK') {
            // TODO избавиться от anxios
            const { data }: {data: T} = response.data;
            return { success: true, data };
        }
        return { success: false, errors: response.errors };
    }
}
