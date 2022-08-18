// *********************
// INSERTION SORT
// *********************

// Big O TIME Complexity:

// Best: O(n) - for sorted or almost sorted arrays;
// Average: O(n*n);
// Worst: O(n*n);

// Big O SPACE Complexity: O(1);

// Insertion algorithm is very good at online algorithms (when data is coming in live).

// Bubble sort, selection sort and insertion sort are roughly equivalent.

// https://visualgo.net/en/sorting

function insertionSort(arr) {
  for (let i = 1; i < arr.lenght; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
