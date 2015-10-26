import Person from './person';

describe('Person', () => {
    it('should report name', () => {
        expect(new Person('John').name).to.equal('John');
    });
});
