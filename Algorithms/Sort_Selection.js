// *********************
// SELECTION SORT
// *********************

// Big O TIME Complexity:

// Best: O(n*n) - for sorted or almost sorted arrays;
// Average: O(n*n);
// Worst: O(n*n);

// Big O SPACE Complexity: O(1);

// Does not perfom well. It's good only if you have to minimize the number of swaps. And it's easy to understand :).

// Bubble sort, selection sort and insertion sort are roughly equivalent.

// https://visualgo.net/en/sorting

// ES5
// function selectionSort(arr){
//      for (let i=0; i<arr.length; i++){
//             let lowest = i;
//             for (let j = i+1; j<arr.length; j++) {
//             if (arr[j]< arr[lowest])lowest = j;
//             }
//          if (i !== lowest) {
//             let temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }
//     return arr;
// }

// ES2015
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

selectionSort([2, 4, -1, 15, 0, 3]);
