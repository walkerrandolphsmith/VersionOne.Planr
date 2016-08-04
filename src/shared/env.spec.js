import env from './env';

describe('./shared/env', function() {
    describe('when loading env', () => {
        it('it should exist', () => {
            should.not.equal(env, undefined);
        });
        it('it should have a host value of localhost', () => {
            env.host.should.equal('localhost')
        });
    });
});
