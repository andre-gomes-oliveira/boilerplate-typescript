/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import * as AWS from 'aws-sdk';
import TABLE_NAMES from '../constants/tableNames';
import configuration from '../infrastructure/configuration/configuration';

AWS.config.update({ region: configuration.REGION });

const docClient = new AWS.DynamoDB.DocumentClient();

class PartnerRepository {
  async getClientCurrentStatus(client_id: string) {
    const params = {
      TableName: TABLE_NAMES.CUSTOMER,
      Key: {
        client_id,
      },
    } as AWS.DynamoDB.DocumentClient.GetItemInput;
    const response = await docClient.get(params).promise();
    return response.Item;
  }
} export default PartnerRepository;
