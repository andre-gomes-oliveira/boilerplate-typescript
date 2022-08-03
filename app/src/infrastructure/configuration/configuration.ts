const configuration = {
  ENVIRONMENT: process.env.STAGE ? process.env.STAGE : 'dev',
  REGION: process.env.REGION ? process.env.REGION : 'sa-east-1',
  TENANT: process.env.TENANT ? process.env.TENANT : 'andre',
  AWS_ACCOUNT_ID: process.env.AWS_ACCOUNT_ID ? process.env.AWS_ACCOUNT_ID : '481834719883',
  ORIGIN_SQS_URL: process.env.ORIGIN_SQS_URL ? process.env.ORIGIN_SQS_URL : 'null',
  AXIOS_TIMEOUT: process.env.AXIOS_TIMEOUT ? process.env.AXIOS_TIMEOUT : '10000',
  URL: process.env.URL ? process.env.URL : 'https://run.mocky.io/v3/cd91582c-2c8d-4631-841d-1a40e5baa6ae',
  KEY: process.env.KEY ? process.env.KEY : 'ee6d8b57-f487-4698-b36a-12ebe42d7b3d',
};

export default configuration;
