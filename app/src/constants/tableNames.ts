import configuration from '../infrastructure/configuration/configuration';

const TABLE_NAMES = {
  CUSTOMER: `${configuration.ENVIRONMENT}_${configuration.TENANT}_customer`,
};

export default TABLE_NAMES;
