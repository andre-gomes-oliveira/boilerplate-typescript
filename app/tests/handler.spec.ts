import { expect } from 'chai';
import sinon from 'sinon';
import { SQSEvent, Context } from 'aws-lambda';
import { exampleUUID } from '../src/handler/example';
import configuration from '../src/infrastructure/configuration/configuration';

const sandbox = sinon.createSandbox();
const uuid = `${configuration.ENVIRONMENT.toUpperCase()}#TESTE#${(new Date()).getTime()}`;

describe('Tests suite - EXAME - DIGITAL.', () => {
  afterEach(async () => {
    sandbox.reset();
    sandbox.restore();
  });

  it('SUCESS: UUID.', async () => {
    // GIVEN
    const event = {
      Records: [
        {
          messageId: 'TEST#UUID',
          body: JSON.stringify({
            uuid,
          }),
        }
      ],
    } as unknown as SQSEvent;
    // WHEN
    const result: boolean = await exampleUUID(event, { functionName: 'test' } as Context);
    // THEN
    expect(result).to.be.eql(true);
  });
});
