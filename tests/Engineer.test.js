const Engineer = require('../lib/Engineer');

describe('Engineer Profile', () => {
  it('should describe Engineer info', () => {
    const engineer = new Engineer('Ricky John', 223, '5555@example.com', 'rickyjohn');

    // Perform assertions
    expect(engineer.getName()).toBe('Ricky John');
    expect(engineer.getId()).toBe(223);
    expect(engineer.getEmail()).toBe('5555@example.com');
    expect(engineer.getGithub()).toBe('rickyjohn');
    expect(engineer.getRole()).toBe('Engineer');
  });
});

  