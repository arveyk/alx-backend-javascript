interface MajorCredits {
  credits: number;
  brand: 'Major';
}

interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  const sum = `${subject1.credits} + ${subject2.credits}`;
  return sum;
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  const sum = `${subject1.credits} + ${subject2.credits}`;
  return sum;
}
