import axios, { AxiosResponse } from 'axios';

interface RequestOptions {
    [key: string]: any;
}

interface ApiHandlerResponse {
    [key: string]: any;
}

const SUCCESSFUL = 200; // Assuming SUCCESSFUL is defined elsewhere

class ApiHandler {
    private BASE: string;

    constructor(BASE: string) {
        this.BASE = BASE;
    }

    async request(endpoint: string, method: string = 'GET', kwargs: RequestOptions = {}): Promise<ApiHandlerResponse> {
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

            return response.data;
        } catch (error) {
            console.error('Error making request:', error);
            throw error;
        }
    }

    async get(endpoint: string, params: RequestOptions = {}, kwargs: RequestOptions = {}): Promise<ApiHandlerResponse> {
        return await this.request(endpoint, 'GET', false, false, { params, ...kwargs });
    }

    async post(endpoint: string, data: RequestOptions = {}, kwargs: RequestOptions = {}): Promise<ApiHandlerResponse> {
        return await this.request(endpoint, 'POST', false, false, { data, ...kwargs });
    }
}
