/* eslint-disable no-return-assign */
import * as AWS from 'aws-sdk';
import configuration from '../infrastructure/configuration/configuration';

AWS.config.update({ region: configuration.REGION });
export default class Db {
  protected params: any;

  protected dbResponse: any;

  protected error: any;

  protected docClient = new AWS.DynamoDB.DocumentClient();

  public set setParams(params: any) {
    this.params = params as any;
  }

  public async get() {
    return this.dbResponse = await this.docClient.get(
      this.params as AWS.DynamoDB.DocumentClient.GetItemInput
    ).promise()
      .catch((error) => {
        throw error;
      });
  }

  public async put() {
    this.dbResponse = await this.docClient.put(
      this.params as AWS.DynamoDB.DocumentClient.PutItemInput
    ).promise()
      .catch((error) => {
        throw error;
      });
  }

  public async update() {
    return this.dbResponse = await this.docClient.update(
      this.params as AWS.DynamoDB.DocumentClient.UpdateItemInput
    ).promise()
      .catch((error) => {
        throw error;
      });
  }
}
