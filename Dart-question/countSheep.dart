/*
  Given a non-negative integer, 3 for example, return a string with a murmur: 
  "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

void main() {
  print(countSheep(3));
}

String countSheep(numb) {
  List list = [];
  for (int i=1; i<=numb; i++){
    list.add("$i sheep...");
  }
  return list.join("");
}

