
const args = process.argv.slice(2);

// Filter out invalid inputs (non-numeric or negative numbers)
const times = args.filter(arg => {
  const num = Number(arg);
  return !isNaN(num) && num > 0;
}).map(Number);