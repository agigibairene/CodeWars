// Your task is to write function factorial.

void main(){
  print(factorial(5));

  print(factorialNum(5));
}

// Using a for loop to solve the problem
int factorial(int n) {
  int count = 1;
  if (n<=1){
    return 1;
  }
  else{
    for (int i = 2; i <= n; i++){
      count *= i;
    }
  }
  return count;
}



// Using Recursion to solve the problem
int factorialNum(int n) {
  return n <= 1 ? 1 : n*factorialNum(n-1); 
}