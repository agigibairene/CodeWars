/*
  Your task is to complete the function 'negationValue()' that takes a 
  string of negations with a value and returns what the value would be
  if those negations were applied to it.
  negationValue("!", false); //=> true
  negationValue("!!!!!", true); //=> false
*/

bool negationValue(String str, bool val) {
  int strLength = str.length;

  // If the number of "!" are even it means the boolean remains unchanged 
  // If it is odd it means the boolean is negated
  return strLength%2==0 ? val : !val;

}

void main(){
  print(negationValue("!!!!!", true));

}