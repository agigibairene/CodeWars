function recurse(n, results = 1){
    return n<=1 ? results : recurse(n-1, results*n);
}

console.log(recurse(5))

function factorial(n){
    return n <= 1 ? 1 : n*factorial(n-1);
}

console.log(factorial(5));

function fibonacci(n){
    let numArr = [0,1]
    
        for (let i = 2; i <= n; i++) {
            numArr.push(numArr[i-1] + numArr[i-2])
        }
    
    return numArr
}
console.log(fibonacci(5))

function sumOfTwoFunctions(n) {
    if (n <= 1) {
        return n;
    } else {
        return sumOfTwoFunctions(n - 1) + sumOfTwoFunctions(n - 2);  // Not a tail call
    }
}

console.log(sumOfTwoFunctions(5));


