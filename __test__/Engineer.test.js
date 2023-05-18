const Engineer = require('../lib/Engineer')
const engineer = new Engineer('Sammy Marks', '12345', 'Smarks@yahoo.com', 'sammygit')

describe ('engineer', () => {
    it('creates an engineer object', () => {
        expect(engineer.name).toBe('Sammy Marks');
        expect(engineer.ID).toBe('12345');
        expect(engineer.email).toBe('Smarks@yahoo.com');
        expect(engineer.github).toBe('sammygit');
    });

    it('return an engineer github', () => {
        expect(engineer.getGithub()).toBe(('sammygit'));
    });

    it('return an engineer role', () => {
        expect(engineer.getRole()).toBe(('Engineer'));
    });
});