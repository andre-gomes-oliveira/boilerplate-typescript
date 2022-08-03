import HTTP_STATUS_CODE from '../../constants/httpStatusCode';

export default class NotFoundError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(`NotFoundError: ${message}`);
    this.name = 'NotFoundError';
    this.message = message;
    this.statusCode = HTTP_STATUS_CODE.NOT_FOUND;
  }
}
