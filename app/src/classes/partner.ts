/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';

import Db from './db';
import HttpsRequests from '../service/HttpsRequests';

export default abstract class Base {
  static timeout = 'timeout';

  private uuid: string;

  private db: Db;

  public serviceHeaders: any = {};

  public serviceMethod: string;

  public serviceUrl: string;

  public serviceBody: any;

  public serviceResponse: any;

  public httpRequests = new HttpsRequests();

  public status: number;

  constructor(uuid: string) {
    this.db = new Db();
    this.uuid = uuid;
  }

  public async callService(): Promise<void> {
    switch (this.serviceMethod) {
      case 'GET':
        this.serviceResponse = (await this.httpRequests.get(
          this.serviceUrl,
          this.serviceHeaders
        )) as AxiosResponse;
        this.status = this.serviceResponse.status;
        break;
      case 'POST':
        this.serviceResponse = (await this.httpRequests.post(
          this.serviceUrl,
          this.serviceBody,
          this.serviceHeaders
        )) as AxiosResponse;
        this.status = this.serviceResponse.status;
        break;
      case 'PUT':
        this.serviceResponse = (await this.httpRequests.put(
          this.serviceUrl,
          this.serviceBody,
          this.serviceHeaders
        )) as AxiosResponse;
        this.status = this.serviceResponse.status;
        break;
      default:
        break;
    }
    return this.serviceResponse;
  }

  protected set setServiceHeaders(serviceHeaders: any) {
    this.serviceHeaders = serviceHeaders;
  }

  protected set setServiceMethod(serviceMethod: string) {
    this.serviceMethod = serviceMethod;
  }

  protected set setServiceUrl(serviceUrl: string) {
    this.serviceUrl = serviceUrl;
  }

  protected async saveHistorySqsReprocess() {
    await this.db.put();
  }

  protected async saveCustomerSqsReprocess() {
    await this.db.put();
  }

  public get getClientId() {
    return this.uuid;
  }
}
