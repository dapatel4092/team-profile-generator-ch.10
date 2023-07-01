const Intern = require('../lib/Intern');

describe('Intern Profile', () => {
  it('should describe Intern info', () => {
    const intern = new Intern('Ricky John', 223, '5555@example.com', 'NAU');

    // Perform assertions
    expect(intern.getName()).toBe('Ricky John');
    expect(intern.getId()).toBe(223);
    expect(intern.getEmail()).toBe('5555@example.com');
    expect(intern.schoolname).toBe('NAU');
    expect(intern.getRole()).toBe('Intern'); 
  });
});
