const Employee = require('../lib/Employee');

describe('Employee Profile', () => {
  it('should describe employee contact information', () => {
    
    const employee = new Employee('Ricky John', 223, '5555@example.com');

    // Perform assertions
    expect(employee.getName()).toBe('Ricky John');
    expect(employee.getId()).toBe(223);
    expect(employee.getEmail()).toBe('5555@example.com');
    expect(employee.getRole()).toBe('Employee');
  });
});
