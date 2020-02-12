import {describe, it, before, after} from 'mocha';
import {assert, should, expect} from 'chai';
import {getLogger} from 'log4js';
import config from '../config/default.js';

const logger = getLogger();

describe('API Test Suite', () => {

    before('Setup started', () => {
        logger.debug('Setup ready.');
    });

    describe('User endpoint', async () => {

        it('should response with user data', () => {
            let str = 'Hello guys!';
            logger.debug('Request: ' + `${config.onboxBaseUrl}` +`:`+ `${config.onboxPort}`);
            logger.debug('Response: ');
            expect(str).equals('Hello guys!');
        });

    });

    after('Teardown started', () => {
        logger.debug('Teardown finished.')
    });
});
