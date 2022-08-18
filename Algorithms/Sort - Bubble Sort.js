// *********************
// BUBBLE SORT
// *********************

// Big O TIME Complexity:

// Best: O(n) - for sorted or almost sorted arrays;
// Average: O(n*n);
// Worst: O(n*n);

// Big O SPACE Complexity: O(1);

// Bubble sort, selection sort and insertion sort are roughly equivalent.

//https://visualgo.net/en/sorting?slide=1

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([3, 2, 6, 4, 77, 0]);
