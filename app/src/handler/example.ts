/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint no-underscore-dangle: 0 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  SQSEvent, Context
} from 'aws-lambda';
import { ExampleInputInterface } from '../interfaces/exampleInputInterface';
import Example from '../business/example';
import configuration from '../infrastructure/configuration/configuration';

export const exampleUUID = async (event: SQSEvent, context: Context): Promise<boolean> => {
  try {
    const record = event.Records[0];
    const body = JSON.parse(record.body) as ExampleInputInterface;
    const { messageId } = record;
    const example = new Example(body.uuid);
    example.setSqsMessageId(messageId);
    example.setSqsOriginAddress(configuration.ORIGIN_SQS_URL);
    example.setFunctionName(context.functionName);
    await example.exampleAPICall(body);
    return true;
  } catch (error) {
    console.log('error::', error);
    return false;
  }
};
