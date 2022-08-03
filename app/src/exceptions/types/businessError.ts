/* eslint-disable no-shadow */
import HTTP_STATUS_CODE from '../../constants/httpStatusCode';
import CodeMessagesInterface from '../../interfaces/codeMessages';

export default class BusinessError extends Error {
  statusCode: number;

  code: string;

  constructor(CodeMessagesInterface: CodeMessagesInterface) {
    super(`BusinessError: ${CodeMessagesInterface.message}`);
    this.name = 'BusinessError';
    this.code = CodeMessagesInterface.code;
    this.message = CodeMessagesInterface.message;
    this.statusCode = HTTP_STATUS_CODE.BAD_REQUEST;
  }
}
