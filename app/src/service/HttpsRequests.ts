/* eslint-disable no-console */
import axios, { AxiosResponse } from 'axios';
import axiosRetry from 'axios-retry';
import configuration from '../infrastructure/configuration/configuration';

axios.defaults.timeout = Number(configuration.AXIOS_TIMEOUT);
export default class HttpsRequests {
  async get(url: string, headers: { [key: string]: string }): Promise<AxiosResponse> {
    axiosRetry(axios, {
      retries: 3,
      shouldResetTimeout: true,
      retryDelay: (retryCount:any) => retryCount * 2000,
      retryCondition: (error:any) => error.response === undefined || error.response.status >= 500,
    });
    const response = await axios.get(url, {
      headers,
    }).catch((error) => error.response || error);
    return response;
  }

  async post(url: string, body: string, headers: { [key: string]: string }): Promise<AxiosResponse> {
    const response = await axios.post(url, body, { headers }).catch((error) => error.response || error);
    return response;
  }

  async put(url: string, body: string, headers: { [key: string]: string }): Promise<AxiosResponse> {
    const response = await axios.put(url, body, { headers }).catch((error) => error.response || error);
    return response;
  }
}
