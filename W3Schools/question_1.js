/*
    1. Write a JavaScript program to calculate the factorial of a number.  
    In mathematics, the factorial of a non-negative integer n, denoted by n!, is the 
    product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

function factorial(n, result=1) {
    if (n<=1){
        return result;
    }
    else{
        return factorial(n-1, result*n);
    }
}
console.log(factorial(5));


console.log("Irene");