/* eslint-disable no-console */
/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';
import { expect } from 'chai';
import * as sinon from 'sinon';
import HttpsRequests from '../src/service/HttpsRequests';

const sandbox = sinon.createSandbox();

const http = new HttpsRequests();

describe('Tests suite - http request.', () => {
  afterEach(async () => {
    sandbox.reset();
    sandbox.restore();
  });

  it('SUCESS: http get.', async () => {
    // GIVEN
    const url = 'https://run.mocky.io/v3/cd91582c-2c8d-4631-841d-1a40e5baa6ae';
    const headers = { 'Content-Type': 'application/json' };
    // WHEN
    const result = await http.get(url, headers) as AxiosResponse;
    expect(result.status).to.be.eql(200);
  });
});
