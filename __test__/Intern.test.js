const Intern = require('../lib/Intern')
const intern = new Intern('Johnny Marks', '123456', 'jmarks@yahoo.com', 'abcschool')

describe ('intern', () => {
    it('creates an intern object', () => {
        expect(intern.name).toBe('Johnny Marks');
        expect(intern.ID).toBe('123456');
        expect(intern.email).toBe('jmarks@yahoo.com');
        expect(intern.school).toBe('abcschool');
    });

    it('return an intern github', () => {
        expect(intern.getSchool()).toBe(('abcschool'));
    });

    it('return an intern role', () => {
        expect(intern.getRole()).toBe(('Intern'));
    });
});