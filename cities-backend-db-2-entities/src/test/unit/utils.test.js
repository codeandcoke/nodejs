import chai from 'chai';
const expect = chai.expect;
import { getDensity} from '../../utils';

describe('utils', () => {
    it('getDensity', () => {
        let density = getDensity(100, 20);
        expect(density).equal(5);

        density = getDensity(10, 100);
        expect(density).equal(0.1);
    });
});