/*
  Given an array of integers your solution should find the smallest integer.
  For example:

  Given [34, 15, 88, 2] your solution will return 2
  Given [34, -345, -1, 100] your solution will return -345
*/

void main() {
  print(findSmallestInt([34, -345, -1, 100]));
}

int findSmallestInt(List<int> arr) {
  // Code here
  int smallest = arr[0];
  for (int i in arr){
    if (i < smallest){
      smallest = i;
    }
  }
  return smallest;
}