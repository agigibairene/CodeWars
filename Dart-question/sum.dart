/*
  Write a function that takes an array of numbers and returns the sum of the numbers. 
  The numbers can be negative or non-integer. 
  If the array does not contain any numbers then you should return 0.
  Examples
  Input: [1, 5.2, 4, 0, -1]
  Output: 9.2

  Input: []
  Output: 0

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
*/

void main(){
  num sumValues = sum([1, 5.2, 4, 0, -1]);
  print(sumValues);
  print(sum([]));
}

num sum(List<num> arr) {
  // your code here
  num total = 0;
  for (num x in arr) {
    total += x;
  }

  return total;
}