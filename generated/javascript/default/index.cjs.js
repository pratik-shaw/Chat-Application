const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'Project',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

