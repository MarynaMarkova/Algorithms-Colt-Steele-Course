// Multiple Pointers - count Unique Values
// It works only with a sorted array

/*countUniqueValues([1,1,1,1,1,2]) //2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
countUniqueValues([])//0
countUniqueValues([-2,-1,-1,0,1])//4*/

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
  return i + 1;
}

countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]);

// Illustration:
//              i
// [1,2,3,4,5,6,7,6,6,7]
//                    j

//Big O = O(n);
