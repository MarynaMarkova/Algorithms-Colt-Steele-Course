// ["Steele", "Colt", "Data Structures", "Algorithms"].sort(); //['Algorithms', 'Colt', 'Data Structures', 'Steele'] - ok
// [6, 4, 15, 10].sort(); // [10, 15, 4, 6] - treats as a string

function numberCompare(num1, num2) {
  return num1 - num2;
}
[6, 4, 15, 10].sort(numberCompare); //[4, 6, 10, 15]

function numberCompareUp(num1, num2) {
  return num2 - num1;
}
[6, 4, 15, 10].sort(numberCompareUp); //[15, 10, 6, 4]

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}
["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen); //['Colt', 'Steele', 'Algorithms', 'Data Structures']
