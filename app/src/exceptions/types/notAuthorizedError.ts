/* eslint-disable no-shadow */
import HTTP_STATUS_CODE from '../../constants/httpStatusCode';

export default class NotAuthorizedError extends Error {
  statusCode: number;

  constructor() {
    super();
    this.message = 'Not Authorized';
    this.statusCode = HTTP_STATUS_CODE.NOT_AUTHORIZED;
  }
}
