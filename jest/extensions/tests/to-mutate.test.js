test('handles expecting a mutation', () => {
  expect(arr => arr.push(1)).toMutate([1, 2, 3]);
});

test('handles expecting no mutation', () => {
  expect(arr => [...arr, 1]).not.toMutate([1, 2, 3]);
});
