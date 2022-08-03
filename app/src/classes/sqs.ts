/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as AWS from 'aws-sdk';
import configuration from '../infrastructure/configuration/configuration';

/**
 * Class responsible to send data to SQS's
 */
class Sqs {
  public response: any;

  private message: any;

  private queueUrl: string;

  private sqs: AWS.SQS = new AWS.SQS({ apiVersion: '2020-04-30' });

  private params: any;

  constructor(message: any, queueUrl: string) {
    AWS.config.update({ region: configuration.REGION });
    this.message = message;
    this.queueUrl = queueUrl;
    this.params = {
      MessageBody: JSON.stringify(this.message),
      QueueUrl: this.queueUrl,
    };
  }

  /**
   * Method responsible to send object to SQS
   */
  public async sendToQueue() {
    await this.sqs.sendMessage(this.params).promise();
  }
}

export default Sqs;
