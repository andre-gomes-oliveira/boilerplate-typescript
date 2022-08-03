/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable semi */
/* eslint-disable camelcase */
export default interface Sqs {
   messageId: string;
   originSqs: string;
   functionName: string;
   setSqsMessageId(messageId: string): void;
   setSqsOriginAddress(originSqs: string): void;
   setFunctionName(functionName: string): void;
};
