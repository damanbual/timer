
const args = process.argv.slice(2);

// Filtered out invalid inputs 
const times = args.filter(arg => {
  const num = Number(arg);
  return !isNaN(num) && num > 0;
}).map(Number); 

// Scheduled a beep for each valid input time
times.forEach(time => {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time * 1000); 
});