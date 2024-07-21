/*
  Given an integral number, determine if it's a square number:
  In mathematics, a square number or perfect square is an integer 
  that is the square of an integer; in other words, it is the product of some integer with itself.
*/

import 'dart:ffi';
import 'dart:math';

void main() {
  print(isSquare(3));
  isSquare(9);
}

bool isSquare(n) { 
  if (n <0){
    return false;
  }
  else{
    num squareRoot = sqrt(n).toInt();
    return pow(squareRoot, 2)== n ? true : false; 
  }
}
