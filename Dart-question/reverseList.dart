/*
  In this kata you will create a function that takes in a list and returns a list with the reverse order.
  Examples (Input -> Output)
  * [1, 2, 3, 4]  -> [4, 3, 2, 1]
  * [9, 2, 0, 7]  -> [7, 0, 2, 9]
*/

void main() {
  print(reverseList([1,2,3,4]));
  print(reverseList([9, 2, 0, 7]));
}


List<int> reverseList(List<int> list) {
  List<int> result = list.reversed.toList();
  return result;
}