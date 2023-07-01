
const Manager = require('../lib/Manager');

describe('Manager Profile', () => {
  it('describes Manager info', () => {
    const manager = new Manager('Mona Victor', 333, '888@gmail.com', '123');

    // Perform assertions
    expect(manager.getName()).toBe('Mona Victor');
    expect(manager.getId()).toBe(333);
    expect(manager.getEmail()).toBe('888@gmail.com');
    expect(manager.officenumber).toBe('123');
    expect(manager.getRole()).toBe('Manager');
  });
});