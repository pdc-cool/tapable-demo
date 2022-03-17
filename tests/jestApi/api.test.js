test('toBe api test', () => {
  expect(3 + 5).toBe(8);
});

test('toEqual api test', () => {
  expect({
    name: 'pdc',
  }).toEqual({
    name: 'pdc',
  });
});

test('not api test', () => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      expect(i + j).not.toBe(0);
    }
  }
});

// Truthiness
test('toBeNull api test', () => {
  const data = null;
  expect(data).toBeNull();
});

test('toBeUndefined  api test', () => {
  expect(undefined).toBeUndefined();
});

test('toBeDefined api test', () => {
  const name = 'pdc';
  expect(name).toBeDefined();
});

test('toBeTruthy api test', () => {
  const name = 'pdc';
  expect(name).toBeTruthy();
});

test('toBeFalsy api test', () => {
  const name = '';
  expect(name).toBeFalsy();
});

// Numbers
test('toBeGreaterThan api test', () => {
  expect(5).toBeGreaterThan(1);
});

test('toBeGreaterThanOrEqual api test', () => {
  expect(3.5).toBeGreaterThanOrEqual(3.5);
});

test('toBeLessThan api test', () => {
  expect(2).toBeLessThan(5);
});

test('toBeLessThanOrEqual api test', () => {
  expect(2).toBeLessThanOrEqual(2);
});

// toBe and toEqual are equivalent for numbers
test('toBe and toEqual are equivalent for numbers', () => {
  const number = 4;

  expect(number).toBe(4);
  expect(number).toEqual(4);
});

// float toBeCloseTo（针对浮点型）
test('toBeCloseTo test api', () => {
  const floatNumber = 0.1 + 0.2;

  // Expected: 0.3
  // Received: 0.30000000000000004
  // expect(floatNumber).toBe(0.3);

  expect(floatNumber).toBeCloseTo(0.3);
});

// Strings
test('toMatch api test', () => {
  expect('team').not.toMatch(/I/);
});

// Arrays and iterables
test('toContain api test', () => {
  const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'];

  expect(shoppingList).toContain('kleenex');
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  // expect(() => compileAndroidCode()).toThrow();
  // expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  // expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
