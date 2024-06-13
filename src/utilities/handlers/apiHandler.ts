import axios, { type AxiosResponse } from 'axios';
import { CRASH, SUCCESSFUL } from '../errors';
import { authApiUrl } from '../config';

export interface RequestOptions {
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
        } catch (error: any) {
            if (error.isAxiosError && error.code === 'ECONNREFUSED') {
              return { status: CRASH }; 
            } else {
              throw error;
            }
        }
    }

    async get(endpoint: string, params: RequestOptions = {}, kwargs: RequestOptions = {}): Promise<ApiHandlerResponse> {
        return await this.request(endpoint, 'GET', { params, ...kwargs });
    }

    async post(endpoint: string, params: RequestOptions = {}, kwargs: RequestOptions = {}): Promise<ApiHandlerResponse> {
        return await this.request(endpoint, 'POST', { params, ...kwargs });
    }
}
