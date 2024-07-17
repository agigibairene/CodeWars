/*
  Return the number (count) of vowels in the given string.
  We will consider a, e, i, o, u as vowels for this Kata (but not y).
  The input string will only consist of lower case letters and/or spaces.
*/
void main() {
  getCount("inputString");
  print(getCount("bcdfghjklmnpqrstvwxy"));
}

int getCount(String inputStri){
  int count = 0;
  String toLowerString = inputStri.toLowerCase();
  String vowels = "aeiou";

  for (int i=0; i<inputStri.length; i++){
    if (vowels.contains(toLowerString[i])){
      count ++;
    }
  }
  return count;
}
