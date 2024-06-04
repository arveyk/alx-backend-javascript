export default function createInt8TypedArray(length, position, value) {
  const numCheck1 = Number.isInteger(length);
  const numCheck2 = Number.isInteger(position);
  const numCheck3 = Number.isInteger(value);
  if (numCheck1 || numCheck2 || numCheck3) {
    throw new Error('Position outside range');
  }
  const buff = new ArrayBuffer(length);
  const int8View = new Int8Array(buff);
  int8View[`${position}`] = value;
  return int8View;
}
