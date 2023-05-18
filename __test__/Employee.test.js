const Employee = require('../lib/Employee')
const employee = new Employee('Leonard Marks', '1234', 'lmarks@yahoo.com')

describe ('employee', () => {
    it('creates an employee object', () => {
        expect(employee.name).toBe('Leonard Marks');
        expect(employee.ID).toBe('1234');
        expect(employee.email).toBe('lmarks@yahoo.com');
    });

    it('return an employee name', () => {
        expect(employee.getName()).toBe(('Leonard Marks'));
    });

    it('return an employee id', () => {
        expect(employee.getID()).toBe(('1234'));
    });

    it('return an employee email', () => {
        expect(employee.getEmail()).toBe(('lmarks@yahoo.com'));
    });

    it('return an employee role', () => {
        expect(employee.getRole()).toBe(('Employee'));
    });



});
