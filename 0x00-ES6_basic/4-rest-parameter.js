export default function returnHowManyArguments (...args) {
  let count = 0;
  for (const intem of args) {
    count += 1;
  }
  return count;
}
