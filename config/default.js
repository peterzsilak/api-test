import {getLogger} from 'log4js';

const logger = getLogger();

const env = process.env.TEST_ENV;
const common = require(`./common.js`),
      envConfig = require(`./${env}.js`),
      config = {...common, ...envConfig};

logger.level = `${config.logLevel}`;

logger.info(`ENVIRONMENT: `+ env);

module.exports = config;