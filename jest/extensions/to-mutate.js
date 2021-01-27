function toMutate(fn, arg) {
  const original = clone(arg);
  const result = fn(arg);
  const pass = !deepEqual(original, arg);
  return {
    pass,
    message: () => `expected function ${pass ? `not` : ``} to mutate ${arg}`
  };
}

export default toMutate;

function clone(v) {
  return JSON.parse(JSON.stringify(v));
}

function deepEqual(v1, v2) {
  return JSON.stringify(v1) === JSON.stringify(v2);
}
