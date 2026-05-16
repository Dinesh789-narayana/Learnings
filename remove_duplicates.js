// Remove duplicates from an array and return a new array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example usage:
const input = [1, 2, 2, 3, 4, 4, 5];
const output = removeDuplicates(input);
console.log(output); // [1, 2, 3, 4, 5]

// Another common approach using filter:
function removeDuplicatesFilter(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

console.log(removeDuplicatesFilter(input)); // [1, 2, 3, 4, 5]
