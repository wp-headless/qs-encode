import encode from '..';

// test('sets transport property', () => {
//   const transport = new MockTransport();
//   const client = new Client({}, transport);
//   expect(client.transport).toBe(transport);
// });

test('simple object', () => {
  const obj = { foo: 123 };
  const out = encode(obj);
  expect(out).toBe('foo=123');
  expect(typeof out).toBe('string');
});

test('complex object', () => {
  const obj = { foo: 123, bar: 456, bam: 99999999999999 };
  expect(encode(obj)).toBe('foo=123&bar=456&bam=99999999999999');
});

test('undefined properties', () => {
  const obj = { foo: undefined, bar: 456 };
  expect(encode(obj)).toBe('bar=456');
});

test('booleans', () => {
  const obj = { foo: true, bar: false };
  expect(encode(obj)).toBe('foo=true&bar=false');
});

test('arrays', () => {
  const obj = { foo: [1, 2, 3], bar: ['one', 'two', 'three'] };
  expect(encode(obj)).toBe(
    'foo[]=1&foo[]=2&foo[]=3&bar[]=one&bar[]=two&bar[]=three'
  );
});

test('nested arrays', () => {
  const obj = { foo: [1, [2], 3], bar: ['one', ['two'], 'three'] };
  expect(encode(obj)).toBe(
    'foo[]=1&foo[]=2&foo[]=3&bar[]=one&bar[]=two&bar[]=three'
  );
});

test('kitchen sink', () => {
  const obj = {
    hello: 'world',
    foo: 'bar',
    colors: ['red', 'green', 'blue'],
    numbers: [100, 200, [300]],
    on: true,
    off: false,
    purple: 'haze'
  };
  const out = encode(obj);
  console.log(out);
  const expected =
    'hello=world&foo=bar&colors[]=red&colors[]=green&colors[]=blue&numbers[]=100&numbers[]=200&numbers[]=300&on=true&off=false&purple=haze';
  expect(out).toBe(expected);
});
