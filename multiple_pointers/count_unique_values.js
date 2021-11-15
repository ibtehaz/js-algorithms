// using multiple pointers
function countUniqueValues(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      count++;
    }
  }
  return count;
}

// using frequency counter
function countUniqueValues2(arr) {
    let lookup = {};
    for(let val of arr) {
        lookup[val] = (lookup[val] || 0) + 1;
    }
    
    return Object.keys(lookup).length;
}


console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // expect 2
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // expected 7
console.log(countUniqueValues([]));  // expect 0