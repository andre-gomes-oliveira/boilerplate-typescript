import { expect } from 'chai';
import BusinessError from '../src/exceptions/types/businessError';

describe('Tests suite - Errors classes.', () => {
  it('SUCESS: Create BusinessError.', async () => {
    const businessExpection = new BusinessError({ code: '400', message: 'Test' });
    expect(businessExpection.message).to.eql('Test');
  });
});
