const Manager = require('../lib/Manager')
const manager = new Manager('Sam Marks', '1234567', 'smarks@yahoo.com','777')

describe ('manager', () => {
    it('creates an manager object', () => {
        expect(manager.name).toBe('Sam Marks');
        expect(manager.ID).toBe('1234567');
        expect(manager.email).toBe('smarks@yahoo.com');
        expect(manager.officeNumber).toBe('777');
    });

    it('return an manager github', () => {
        expect(manager.getofficeNumber()).toBe(('777'));
    });

    it('return an manager role', () => {
        expect(manager.getRole()).toBe(('Manager'));
    });
});