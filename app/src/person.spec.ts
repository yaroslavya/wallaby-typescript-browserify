import Person from './person';

describe('Person', () => {
    it('should report name', () => {
        expect(new Person('John-imported-from-same-directory').name).to.equal('John-imported-from-same-directory');
    });
});
