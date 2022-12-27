const arr = [1, 2, 3, 4, 5, 6, 7];

function itv(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
}

console.log(itv(arr, 3)); // OPTION 1
console.log(arr.indexOf(3)); // OPTION 2

export function search(arr, target, start = 0, end = arr.length - 1) {
  console.log(start, end);

  if (start > end) {
    console.log("Not Found.");
    return -1;
  }

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) {
    console.log(
      `We found the number ${target}, and it is located in index ${middle}.`
    );
    return middle;
  }

  if (arr[middle] > target) {
    return search(arr, target, start, middle - 1);
  }

  if (arr[middle] < target) {
    return search(arr, target, middle + 1, end);
  }
}

console.log(search(arr, 3));
