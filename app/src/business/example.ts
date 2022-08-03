import CODE_MESSAGES from '../constants/codeMessages';
import configuration from '../infrastructure/configuration/configuration';
import Http from '../classes/http';
import Base from '../classes/partner';
import Sqs from '../interfaces/Sqs';
import SqsService from '../classes/sqs';
import { ExampleInputInterface } from '../interfaces/exampleInputInterface';

export default class Example extends Base implements Sqs {
  messageId: string;

  originSqs: string;

  functionName: string;

  protected sqsService: SqsService;

  protected http: Http = new Http();

  protected exampleDigitalResponse: any;

  private formatExampleEmailEditData: any;

  private apiKey: string;

  private apiUrl: string;

  private exampleDigitalBody: ExampleInputInterface;

  private exampleDigitalResponseStatus: number;


  public get getExampleDigitalResponse() {
    return this.exampleDigitalResponse();
  }

  setFunctionName(functionName: string): void {
    this.functionName = functionName;
  }

  setSqsMessageId(messageId: string): void {
    this.messageId = messageId;
  }

  setSqsOriginAddress(originSqs: string): void {
    this.originSqs = originSqs;
  }

  public async exampleAPICall(body: ExampleInputInterface) {
    this.apiKey = configuration.KEY;
    this.apiUrl = configuration.URL;
    this.exampleDigitalBody = body;
    this.formatExampleDigitalEmailEditData();
    this.http.setUrl = `${this.apiUrl}`;
    this.http.setHeaders = { Authorization: `Bearer ${this.apiKey}` };
    this.http.setBody = this.formatExampleEmailEditData;
    this.exampleDigitalResponse = await this.http.post();
    this.exampleDigitalResponseStatus = this.exampleDigitalResponse.status;
    await this.checkExampleDigitalEmailEditResponse();
  }

  private async checkExampleDigitalEmailEditResponse() {
    if (
      !this.exampleDigitalResponseStatus
      || (this.exampleDigitalResponseStatus >= 400)
    ) {
      throw new Error(CODE_MESSAGES.UNEXPECTED_ERROR.message);
    }
  }

  private formatExampleDigitalEmailEditData() {
    this.formatExampleEmailEditData = {
      email: this.exampleDigitalBody.uuid,
    };
  }
}
