import {describe, it, before, after} from 'mocha';
import {assert, should, expect} from 'chai';
import {getLogger} from 'log4js';
import config from '../config/default.js';

const logger = getLogger();

describe('API Test Suite', () => {

    before('Setup started', () => {
        logger.debug('Setup ready.');
    });

    describe('Test case', async () => {

        it('should use the right environment', () => {
            let str = 'Hello guys!';
            logger.debug('Request: ' + `${config.baseUrl}` +`:`+ `${config.port}`);
            logger.debug('Response: ...');
        });

    });

    after('Teardown started', () => {
        logger.debug('Teardown finished.')
    });
});
