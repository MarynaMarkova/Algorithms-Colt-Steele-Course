// SWAPPING

// ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap2 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// Bubble Sort
// Time Complexity Big O = O(N*N) - worst case;
// Big O = O(N) - for sorted or almost sorted arrays;

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
