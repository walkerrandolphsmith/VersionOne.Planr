import expect from 'expect';
import { ROUTES } from './routes';
import { NotFound } from './components/NotFound';

describe('src/shared/routes', () => {
    describe('Given a collection of route definitions', () => {
        it('should contain a mapping between * path and NotFound component', () => {
            expect(ROUTES).toInclude({ path: '*', component: NotFound, status: 404 });
        });
    });
});