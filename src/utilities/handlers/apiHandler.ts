import axios, { type AxiosResponse } from 'axios';
import { SUCCESSFUL } from '../errors';

interface RequestOptions {
    [key: string]: any;
}

interface ApiHandlerResponse {
    [key: string]: any;
}

export class ApiHandler {
    private BASE: string;

    constructor(BASE: string) {
        this.BASE = BASE;
    }

    async request(endpoint: string, method: string = 'GET', kwargs: RequestOptions = {}) {
        const url = this.BASE + endpoint;
        try {
            const response: AxiosResponse<any> = await axios.request({
                url,
                method,
                ...kwargs
            });

            if (response.status !== SUCCESSFUL) {
                return { status: response.status };
            }

            return {
                status: SUCCESSFUL,
                data: {
                    ...response.data                    
                }
            };
        } catch (error) {
            console.error('Error making request:', error);
            throw error;
        }
    }

    async get(endpoint: string, params: RequestOptions = {}, kwargs: RequestOptions = {}): Promise<ApiHandlerResponse> {
        return await this.request(endpoint, 'GET', { params, ...kwargs });
    }

    async post(endpoint: string, data: RequestOptions = {}, kwargs: RequestOptions = {}): Promise<ApiHandlerResponse> {
        return await this.request(endpoint, 'POST', { data, ...kwargs });
    }
}
