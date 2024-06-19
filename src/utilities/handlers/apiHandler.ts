import axios, { type AxiosResponse } from "axios";
import { CRASH, CRASH_MSG, SUCCESSFUL } from "../errors";
import { authApiUrl } from "../config";

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

  async request(endpoint: string, method: string = "GET", kwargs: RequestOptions = {}) {
    const url = this.BASE + endpoint;
    try {
      const response: AxiosResponse<any> = await axios.request({
        url,
        method,
        ...kwargs,
      });

      if (response.status != SUCCESSFUL) {
        return { status: response.status };
      }

      return {
        status: response.data.status_code,
        data: {
          ...response.data,
        },
      };
    } catch (error: any) {
      // console.error(error);
      return { status: CRASH, message: CRASH };
    }
  }

  async get(endpoint: string, params: RequestOptions = {}, kwargs: RequestOptions = {}): Promise<ApiHandlerResponse> {
    return await this.request(endpoint, "GET", { params, ...kwargs });
  }

  async post(endpoint: string, params: RequestOptions = {}, kwargs: RequestOptions = {}): Promise<ApiHandlerResponse> {
    return await this.request(endpoint, "POST", { params, ...kwargs });
  }
}
