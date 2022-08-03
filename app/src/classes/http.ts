/* eslint-disable no-return-assign */
import axios, { AxiosResponse } from 'axios';

axios.defaults.timeout = 50000;

export default class Http {
  private url: string;

  private headers: { [key: string]: string };

  private body: string;

  private response: any;

  public set setUrl(url: string) {
    this.url = url;
  }

  public set setHeaders(headers: { [key: string]: string }) {
    this.headers = headers;
  }

  public set setBody(body: string) {
    this.body = body;
  }

  public async get(): Promise<void> {
    this.response = await axios.get(this.url, this.headers).catch((error) => error.response || error);
    await this.returnResponse();
  }

  public async post(): Promise<void> {
    return this.response = await axios.post(this.url, this.body, { headers: this.headers }).catch((error) => error.response || error);
  }

  public async put(): Promise<void> {
    return this.response = await axios.put(this.url, this.body, this.headers).catch((error) => error.response || error);
  }

  public async delete(): Promise<void> {
    this.response = await axios.delete(this.url, this.headers).catch((error) => error.response || error);
    await this.returnResponse();
  }

  private async returnResponse(): Promise<AxiosResponse> {
    return this.response;
  }
}
