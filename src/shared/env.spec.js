import * as env from './env';
import expect from 'expect';

describe('./shared/env', function() {
    describe('when loading env', () => {
        it('it should exist', () => {
            expect(env).toBeTruthy();
        });
        it('it should have a host value of localhost', () => {
            expect(env.host).toEqual('localhost');
        });
    });
});
