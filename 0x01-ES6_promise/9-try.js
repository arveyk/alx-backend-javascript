export default function guardrail(mathFunction) {
  let queue = [];
  try {
    queue.push(mathFunction());
    queue.push('Guardrail was processed');
  }
  catch(err) {
    queue.push('Error: cannot divide by 0');
    queue.push('Guardrail was processed');
  }
  return queue;
}
