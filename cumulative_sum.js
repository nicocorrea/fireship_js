const arr = [1, 3, 5, 7];

// OPTION 1
export function cumulative(arr) {
  let total = 0;
  arr.forEach((x) => (total += x));
  return total;
}

console.log(cumulative(arr));

// OPTION 2, using Reduce
console.log(arr.reduce((acc, cur) => acc + cur));
