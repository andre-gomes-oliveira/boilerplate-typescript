/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import PartnersHubRepository from '../repository/partnersHubRepository';
import configuration from '../infrastructure/configuration/configuration';

const insertSqsReprocessHitory = async (
  data: unknown,
  clientId: string,
  partner: string,
  program: string,
  messageId: string,
  httpBodyResponse: unknown,
  httpBodyResponseStatus: number,
  httpBodyRequest: unknown,
  httpUrl: string,
  operationDate: string,
  operation: string
) => {
  const sqsReprocessObject = {
    clientId,
    endpoint: httpUrl,
    messageId,
    operation,
    operation_date_time: operationDate,
    partner,
    program,
    request: httpBodyRequest,
    response: {
      body: httpBodyResponse,
      statusCode: httpBodyResponseStatus,
    },
    sqsBody: data,
    sqsUrl: configuration.ORIGIN_SQS_URL,
    ttl: Math.floor(new Date().getTime() / 1000) + 1800,
  };
  console.log(sqsReprocessObject);
};

export default insertSqsReprocessHitory;
